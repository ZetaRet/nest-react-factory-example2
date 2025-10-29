"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBoardColumnDto = exports.UpdateBoardDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_board_dto_1 = require("./create-board.dto");
class UpdateBoardDto extends (0, mapped_types_1.PartialType)(create_board_dto_1.CreateBoardDto) {
}
exports.UpdateBoardDto = UpdateBoardDto;
class UpdateBoardColumnDto extends (0, mapped_types_1.PartialType)(create_board_dto_1.CreateBoardColumnDto) {
}
exports.UpdateBoardColumnDto = UpdateBoardColumnDto;
