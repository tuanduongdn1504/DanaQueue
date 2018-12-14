const Boom = require('boom');
const _ = require('lodash');
const Models = require('../../database/models');
const firebase = require('../../utils/firebase');

exports.getAllNotification = async query => Models.Notification.queryBuilder(query);

exports.getOneNotification = async id => {
    try {
      const result = await Models.Notification.query().findById(id);
      if (!result) {
        throw Boom.notFound('Notification not found');
      }
      return result;
    } catch (error) {
      throw error;
    }
  };

  exports.createToken = async (id, body) => {
    try {
      const { token } = body;
      await Models.User.query().updateAndFetchById(id, { tokenNotify: token });
      const topic = 'driveAll';
      const response = await firebase.messaging().subscribeToTopic(token, topic);
      if (response.successCount) {
        return {
          status: 'success'
        };
      }
  
      return {
        status: 'fail'
      };
    } catch (error) {
      throw error;
    }
  };

  exports.createNotify = async body => {
    try {
      const notify = await Models.Notification.query()
        .insert(body)
        .returning('*');
  
      const message = {
        topic: 'driveAll',
        notification: {
          title: body.title,
          body: body.content
        },
        data: {
          idNotify: notify.id.toString()
        }
      };
  
      await firebase.messaging().send(message);
  
      return notify;
    } catch (error) {
      throw error;
    }
  };
  