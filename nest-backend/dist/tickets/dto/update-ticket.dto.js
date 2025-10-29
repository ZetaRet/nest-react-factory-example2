"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCommentDto = exports.UpdateTicketDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ticket_dto_1 = require("./create-ticket.dto");
class UpdateTicketDto extends (0, mapped_types_1.PartialType)(create_ticket_dto_1.CreateTicketDto) {
}
exports.UpdateTicketDto = UpdateTicketDto;
class UpdateCommentDto extends (0, mapped_types_1.PartialType)(create_ticket_dto_1.CreateCommentDto) {
}
exports.UpdateCommentDto = UpdateCommentDto;
