"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagModule = void 0;
const common_1 = require("@nestjs/common");
const tag_controller_1 = require("./tag.controller");
let TagModule = (() => {
    let TagModule = class TagModule {
    };
    TagModule = __decorate([
        common_1.Module({
            controllers: [tag_controller_1.TagController]
        })
    ], TagModule);
    return TagModule;
})();
exports.TagModule = TagModule;
//# sourceMappingURL=tag.module.js.map