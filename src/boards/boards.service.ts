import { Get, Injectable } from '@nestjs/common';

// 이 NestJS는 이것을 이용해서 다른 컴포넌트에서 이 서비스를 사용 할 수 있게(injectable)만들어줍니다.
@Injectable()
export class BoardsService {
  private boards = [];

  getAllBoards() {
    return this.boards;
  }
}
