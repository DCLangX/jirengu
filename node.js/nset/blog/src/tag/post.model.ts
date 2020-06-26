import { prop, getModelForClass } from '@typegoose/typegoose';

export class Tag {
  @prop()
  public title: string;
}

export const TagModel = getModelForClass(Tag)