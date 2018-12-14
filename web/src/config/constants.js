import vi from '../assets/images/flag/vi.png';
import en from '../assets/images/flag/en.png';

export const colors = {
  snow: 'white',
  clear: 'rgba(0, 0, 0, 0.0)',
  blur: 'rgba(0, 0, 0, 0.27)',
  blurRed: '#e54d3e',
  blurGreen: '#27ae61',
  blurYellow: '#f1c40f',
  blurBricky: '#e67f22',
  drawer: '#373445',
  dark: '#12132c',
  txtDark: '#3d3d3d',
  darkGreen: 'rgb(34, 94, 65)',
  green: '#27ae61',
  yellowishOrange: '#ffa50b',
  red: '#e54d3e',
  gray: '#EAEAEA',
  blueGrey: '#a6a7bd',
  warmGrey: '#afafaf',
  lightGrey: '#ccd3db',
  darkGreyBlue: 'rgb(41, 34, 103)',
  sunYellow: '#f3da22',
  redTwo: '#e30804',
  black: '#2b2b2b',
  blackTwo: '#4a4a4a',
  lightBlack: '#747474',
  white: '#f2f2f2',
  whiteTwo: '#e7e7e7',
  whiteThree: '#d8d8d8',
  whiteFour: 'rgba(255, 255, 255, 0.9)',
  fakeLight: 'rgba(0, 0, 0, 0.3)',
  fake: 'rgba(0, 0, 0, 0.5)',
  fakeDark: 'rgba(0, 0, 0, 0.7)',
  lightRed: '#F64C4C',
  lightBlue: '#324269',
  blueTwo: '#336BDE',
  textBlue: '#2E4168',
  background: 'white',
  divider: '#eeeeee',
  primaryDark: '#303F9F',
  primaryColor: '#247ecb',
  primaryLightColor: '#0088FF',
  secondaryColor: '#294067',
  grey: '#A7A7A7',
  textGrey: '#666666',
  darkGrey: '#909090',
  darkBlue: 'rgb(46, 65, 104)',
  darkBlueTwo: 'rgb(60, 114, 207)',
  blurGrey: '#bababa',
};
export const TYPE_GROUPS = ['HELP', 'EMERGENCY', 'REPORT'];

export const ADDRESS_TYPES = [
  {
    id: 'WARD',
    text: {
      vi: 'Khu vực',
      en: 'Ward',
    },
  },
  {
    id: 'COMMUNE',
    text: {
      vi: 'Thị xã',
      en: 'Commune',
    },
  },
  {
    id: 'TOWN',
    text: {
      vi: 'Thị trấn',
      en: 'Town',
    },
  },
  {
    id: 'DISTRICT',
    text: {
      vi: 'Quận/Huyện',
      en: 'District',
    },
  },
  {
    id: 'CITY',
    text: {
      vi: 'Thành phố',
      en: 'City',
    },
  },
  {
    id: 'PROVINCE',
    text: {
      vi: 'Tỉnh',
      en: 'Province',
    },
  },
];

export const STATUS = [
  {
    id: 'pending',
    color: colors.blurRed,
    tagColor: 'red',
    text: {
      vi: 'Đang chờ',
      en: 'Pending',
    },
  },
  {
    id: 'running',
    color: colors.blurYellow,
    tagColor: 'gold',
    text: {
      vi: 'Đang xử lý',
      en: 'Open',
    },
  },
  {
    id: 'finished',
    color: colors.warmGrey,
    tagColor: undefined,
    text: {
      vi: 'Đã giải quyết',
      en: 'Finished',
    },
  },
  {
    id: 'canceled',
    color: colors.warmGrey,
    tagColor: undefined,
    text: {
      vi: 'Đã huỷ',
      en: 'Canceled',
    },
  },
];

export const LANGUAGE = {
  text: {
    vi: 'Tiếng Việt',
    en: 'Tiếng Anh',
  },
  icon: {
    vi,
    en,
  },
};

export const APPROVE_STATUS = [
  {
    vi: 'Đã duyệt',
    value: true,
    en: 'Approved',
    color: 'green',
  },
  {
    value: false,
    vi: 'Chưa duyệt',
    en: 'Disapproved',
    color: '#03a9f4',
  },
];

export const GENDER = [
  {
    id: 'Male',
    name: {
      en: 'Male',
      vi: 'Nam',
    },
  },
  {
    id: 'Female',
    name: {
      en: 'Female',
      vi: 'Nữ',
    },
  },
];

export const BLOOD_TYPES = ['O', 'A', 'B', 'AB-', 'AB+', 'A-', 'B-'];

export const REVIEW_LEVELS = [
  {
    id: 1,
    text: {
      en: 'At least 1 star',
      vi: 'Ít nhất 1 sao',
    },
  },
  {
    id: 2,
    text: {
      en: 'At least 2 star',
      vi: 'Ít nhất 2 sao',
    },
  },
  {
    id: 3,
    text: {
      en: 'At least 3 star',
      vi: 'Ít nhất 3 sao',
    },
  },
  {
    id: 4,
    text: {
      en: 'At least 4 star',
      vi: 'Ít nhất 4 sao',
    },
  },
  {
    id: 5,
    text: {
      en: 'At least 5 star',
      vi: 'Ít nhất 5 sao',
    },
  },
];

export const USER_STATUS = [
  {
    id: 1,
    data: 'true',
    text: {
      en: 'Locked',
      vi: 'Khoá',
    },
  },
  {
    id: 1,
    data: 'false',
    text: {
      en: 'Unlock',
      vi: 'Không Khoá',
    },
  },
];

export const MEMBER_STATUS = [
  {
    id: 1,
    data: 'false',
    text: {
      en: 'Locked',
      vi: 'Khoá',
    },
  },
  {
    id: 1,
    data: 'true',
    text: {
      en: 'Unlock',
      vi: 'Không Khoá',
    },
  },
];

export const ACTIVE_TYPES = [
  {
    id: 1,
    data: 'false',
    text: {
      en: 'deactive',
      vi: 'Không hoạt động',
    },
  },
  {
    id: 1,
    data: 'true',
    text: {
      en: 'active',
      vi: 'Đang hoạt động',
    },
  },
];

export const MEMBER_ROLES = [
  {
    id: 1,
    text: {
      en: 'Admin',
      vi: 'Admin',
    },
  },
  {
    id: 2,
    text: {
      en: 'Member',
      vi: 'Member',
    },
  },
];

export const LANGUAGES = [
  {
    id: 'en',
    text: {
      en: 'English',
      vi: 'Tiếng Anh',
    },
  },
  {
    id: 'vi',
    text: {
      en: 'Vietnamese',
      vi: 'Tiếng Việt',
    },
  },
];

export const GENDERS = [
  {
    id: 'Male',
    text: {
      en: 'Male',
      vi: 'Nam',
    },
  },
  {
    id: 'Female',
    text: {
      en: 'Female',
      vi: 'Nữ',
    },
  },
];

export const DISTANCES = [
  {
    id: 1,
    text: '1 km',
  },
  {
    id: 2,
    text: '2 km',
  },
  {
    id: 5,
    text: '5 km',
  },
  {
    id: 10,
    text: '10 km',
  },
  {
    id: 15,
    text: '15 km',
  },
  {
    id: 15,
    text: '15 km',
  },
];
