import { AbstractEntity } from "src/common/entities";
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
  UpdateEvent,
} from "typeorm";

@EventSubscriber()
export class AbstractEntitySubscriber
  implements EntitySubscriberInterface<AbstractEntity> {
  listenTo() {
    return AbstractEntity;
  }

  beforeInsert(event: InsertEvent<AbstractEntity>) {}

  beforeUpdate(event: UpdateEvent<AbstractEntity>) {}

  beforeRemove(event: RemoveEvent<AbstractEntity>) {}
}
