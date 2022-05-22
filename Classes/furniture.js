"use strict";

class furniture {
  constructor(LocationOnScreen, ImageInBase64, typeName) {
    this.location = LocationOnScreen;
    this.imageInBase64 = ImageInBase64;
    this.typeName = typeName;
  }

  // Getter
  get Location() {
    return this.location;
  }
  get ImageInBase64() {
    return this.imageInBase64;
  }
  get TypeName() {
    return this.typeName;
  }

  // Setters
  changeImageInBase64(ImageInBase64) {
    this.imageInBase64 = ImageInBase64;
  }
  changeLocation(newLocation) {
    this.location = newLocation;
  }
  changeTypeName(typeName) {
    this.typeName = typeName;
  }
}

module.exports.furnitureClass = furniture;
