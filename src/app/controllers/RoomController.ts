import { NextFunction, Request, Response } from "express";
import GetPrivateRoomByUserHandler from "../handlers/rooms/GetPrivateRoomByUserHandler";
import CreateGroupRoomHandler from "../handlers/rooms/CreateGroupRoomHandler";
import GetMyRoomsHandler from "../handlers/rooms/GetMyRoomsHandler";
import { IMessage } from "../entities/Room";
import GetMessagesHandler from "../handlers/rooms/GetMessagesHandler";
import AddUserIntoRoomHannler from "../handlers/rooms/AddUserIntoRoomHannler";
import SearchRoomHandler from "../handlers/rooms/SearchRoomHandler";
import { getLocationFromRequest } from "../../util/mutler";
import RemoveUserFromRoomHannler from "../handlers/rooms/RemoveUserFromRoomHannler";

const GetMessagesHandler_1 = __importDefault(require("../handlers/rooms/GetMessagesHandler"));
const AddUserIntoRoomHannler_1 = __importDefault(require("../handlers/rooms/AddUserIntoRoomHannler"));
const SearchRoomHandler_1 = __importDefault(require("../handlers/rooms/SearchRoomHandler"));
const mutler_1 = require("../../util/mutler");
const RemoveUserFromRoomHannler_1 = __importDefault(require("../handlers/rooms/RemoveUserFromRoomHannler"));
const UpdateNameGroupRoomHandler_1 = __importDefault(require("../handlers/rooms/UpdateNameGroupRoomHandler"));
const UpdateAvatarGroupRoomHandler_1 = __importDefault(require("../handlers/rooms/UpdateAvatarGroupRoomHandler"));

class RoomController {
  // [GET] api/rooms/users/:userId
  async getPrivateRoomByUser(req: Request, res: Response, next: NextFunction) {
    const request = {
      myId: req.headers.userId as string,
      userId: req.params.userId,
    };
    const result = await GetPrivateRoomByUserHandler.handle(request);
    res.status(200).json(result);
  }
  // [POST] api/rooms
   createGroupRoomByUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const avatar = (0, mutler_1.getUrlFromRequest)(req);
            const request = {
                myId: req.headers.userId,
                userIds: req.body.userIds,
                name: req.body.name,
                avatar: req.body.avatar,
                avatar: avatar,
            };
            const result = yield CreateGroupRoomHandler_1.default.handle(request);
            res.status(200).json(result);
        });
    }

   // [PATCH] /:roomId/users
   updateNameRoom(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const request = {
            myId: req.headers.userId,
            name: req.body.name,
            roomId: req.params.roomId,
        };
        const result = yield UpdateNameGroupRoomHandler_1.default.handle(request);
        res.status(200).json(result);
    });
}
// [PATCH] /:roomId/avatar
updateAvatarRoom(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const avatar = (0, mutler_1.getUrlFromRequest)(req);
        const request = {
            myId: req.headers.userId,
            roomId: req.params.roomId,
            avatar: avatar,
        };
        const result = yield UpdateAvatarGroupRoomHandler_1.default.handle(request);
        res.status(200).json(result);
    });
}

  // [PUT] /:roomId/users/:userId
  async addUserIntoRoom(req: Request, res: Response, next: NextFunction) {
    const request = {
      userId: req.params.userId,
      roomId: req.params.roomId,
    };
    const result = await AddUserIntoRoomHannler.handle(request);
    res.status(200).json(result);
  }
  // [DELETE] /:roomId/users/:userId
  async removeUserFromRoom(req: Request, res: Response, next: NextFunction) {
    const request = {
      userId: req.params.userId,
      roomId: req.params.roomId,
    };
    const result = await RemoveUserFromRoomHannler.handle(request);
    res.status(200).json(result);
  }
  // [GET] api/rooms
  async getMyRooms(req: Request, res: Response, next: NextFunction) {
    const request = {
      limit: Number(req.query.limit),
      page: Number(req.query.page),
      userId: req.headers.userId as string,
    };
    const result = await GetMyRoomsHandler.handle(request);
    res.status(200).json(result);
  }
  // [GET] api/rooms/messages
  async getMesageByGroup(req: Request, res: Response, next: NextFunction) {
    const request = {
      limit: Number(req.query.limit),
      page: Number(req.query.page),
      roomId: req.params.roomId as string,
      type: req.query.type as string,
    };
    const result = await GetMessagesHandler.handle(request);
    res.status(200).json(result);
  }
  // [GET] api/rooms/search?q=
  async searchRoom(req: Request, res: Response, next: NextFunction) {
    const request = {
      myId: req.headers.userId as string,
      q: req.query.q as string,
    };
    const result = await SearchRoomHandler.handle(request);
    res.status(200).json(result);
  }
}
export default new RoomController();
