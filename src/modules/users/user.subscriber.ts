import { Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent } from 'typeorm';
import { User } from './entities/user.entity';
import { hashSync } from 'bcrypt';
import * as cryptoRandomString from 'crypto-random-string';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {

    constructor(
        connection: Connection,
    ) {
        connection.subscribers.push(this);
    }

    listenTo() { return User; }

    beforeInsert(event: InsertEvent<User>) {
        if (event.entity.passwordHash) {
            event.entity.passwordHash = hashSync(event.entity.passwordHash, 10);
        }
        event.entity.apiKey = cryptoRandomString({ length: 46, type: 'alphanumeric' });
    }

    beforeUpdate(event: UpdateEvent<User>) {
        if (event.entity.passwordHash !== event.databaseEntity.passwordHash) {
            event.entity.passwordHash = hashSync(event.entity.passwordHash, 10);
        }
    }
}
