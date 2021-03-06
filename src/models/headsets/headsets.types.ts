import { Document } from 'mongoose';

export enum BRANDS {
  Oculus,
  HTC,
  Valve,
  HP,
  Pimax,
  Playstation,
  VRgineers,
  StarVR,
}

export interface IHeadset extends Document {
  id: {
    type: String,
    unique: true,
  };
  index: Number,
  name: String,
  audience: Number,
  audio: Boolean,
  brand: String,
  controller: String,
  description: String,
  eyetracking: Boolean,
  facialrecognition: Boolean,
  flipup: Boolean,
  fov: Number,
  handtracking: Boolean,
  img: String,
  imgs: [String],
  ipd: Boolean,
  mic: Boolean,
  pixeldensity: Number,
  platform: [String],
  price: Number,
  refreshrate: Number,
  releasedate: {
    seconds: Number,
    nanoseconds: Number,
  };
  requirements: {
    os: [String],
    cpu: String,
    gpu: String,
    ram: Number,
    usb: String,
    video: String,
  };
  resolution: {
    x: Number,
    y: Number,
  };
  screentype: String,
  standalone: Boolean,
  standalonespecs: {
    cpu: String,
    gpu: String,
    ram: Number,
    storages: [Number],
    expandable: Boolean,
    batterylife: Number,
    link: Boolean,
  };
  status: Number,
  summary: String,
  think: String,
  tracking: String,
  weight: Number,
  wireless: Boolean,
  pushedContents: [
    {
      text: String,
      img: String,
      right: Boolean,
    },
  ];
}
