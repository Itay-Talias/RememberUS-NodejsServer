"use strict";

class furniture {
  constructor(typeName, furnitureIndex) {
    this.furnitureIndex = furnitureIndex;
    this.imageInBase64 = undefined;
    this.typeName = typeName;
  }
  // Getter
  get ImageInBase64() {
    return this.imageInBase64;
  }
  get TypeName() {
    return this.typeName;
  }
  get FurnitureIndex() {
    return this.furnitureIndex;
  }

  // Setters
  changeImageInBase64(ImageInBase64) {
    this.imageInBase64 = ImageInBase64;
  }
  changeTypeName(typeName) {
    this.typeName = typeName;
  }
  changeFurnitureIndex(newIndex) {
    this.furnitureIndex = newIndex;
  }

  //Methods
  addDescriptionPhoto(ImageInBase64) {
    this.imageInBase64 = ImageInBase64;
  }
}

module.exports.furnitureClass = furniture;
