import {
  mdiHome,
  mdiSend,
  mdiFileUpload,
  mdiFile,
  mdiFileMusic,
  mdiFileVideo,
  mdiFileImage,
  mdiClose,
  mdiPlusCircleOutline,
  mdiGoogle,
  mdiGithub,
  mdiPhone,
  mdiPhoneOutline,
  mdiPin,
  mdiBell,
  mdiBellOutline,
  mdiDotsHorizontal,
  mdiBook,
  mdiTwitter,
  mdiTagMultiple,
  mdiEmail,
  mdiTag,
  mdiPlus,
  mdiMagnify,
  mdiHistory,
  mdiDownload,
  mdiEmoticonOutline,
  mdiCog,
  mdiAccount,
  mdiCogs,
  mdiBrightness6,
  mdiPencilOutline,
  mdiToggleSwitchOff,
  mdiToggleSwitch,
  mdiChevronDoubleLeft,
  mdiChevronLeft,
  mdiBookmark,
  mdiBookmarkMultiple,
  mdiLink,
  mdiQrcode
} from '@mdi/js'

interface MdiIconsMapping {
  [name: string]: string
}

const mdi: MdiIconsMapping = {
  home: mdiHome,
  send: mdiSend,
  file: mdiFile,
  close: mdiClose,
  google: mdiGoogle,
  github: mdiGithub,
  phone: mdiPhone,
  'phone-outline': mdiPhoneOutline,
  pin: mdiPin,
  bell: mdiBell,
  'bell-outline': mdiBellOutline,
  search: mdiMagnify,
  history: mdiHistory,
  'file-upload': mdiFileUpload,
  'file-music': mdiFileMusic,
  'file-video': mdiFileVideo,
  'file-image': mdiFileImage,
  'plus-circle-outline': mdiPlusCircleOutline,
  'dots-horizontal': mdiDotsHorizontal,
  book: mdiBook,
  twitter: mdiTwitter,
  tag: mdiTag,
  tags: mdiTagMultiple,
  email: mdiEmail,
  plus: mdiPlus,
  download: mdiDownload,
  'emoticon-outline': mdiEmoticonOutline,
  cog: mdiCog,
  account: mdiAccount,
  cogs: mdiCogs,
  'brightness-6': mdiBrightness6,
  pencil: mdiPencilOutline,
  'toggle-switch-off': mdiToggleSwitchOff,
  'toggle-switch-on': mdiToggleSwitch,
  'chevron-double': mdiChevronDoubleLeft,
  'chevron-left': mdiChevronLeft,
  bookmark: mdiBookmark,
  'bookmark-multiple': mdiBookmarkMultiple,
  link: mdiLink,
  qrcode: mdiQrcode
}

export default mdi
