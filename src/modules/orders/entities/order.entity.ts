import { AbstractEntity } from 'src/common/entities';
import { User } from 'src/modules/users/entities';
import { Column, Entity, ManyToOne } from 'typeorm';
import { OrderStatus } from '../enums/order-status.enum';
import { OrderType } from '../enums/order-type.enum';
import { Reaction } from '../enums/reaction.enum';

@Entity({ name: 'orders' })
export class Order extends AbstractEntity {
    @Column()
    userId: string;

    @ManyToOne(() => User)
    user: User;

    @Column()
    memoCode: string;

    @Column()
    facebookId: string;

    @Column()
    quantity: number;

    @Column({ default: 0 })
    increased: number;

    @Column({ type: 'enum', enum: OrderStatus })
    status: OrderStatus;

    @Column({ type: 'enum', enum: OrderType })
    type: OrderType;

    @Column({ type: 'enum', enum: Reaction })
    reaction: Reaction;

    @Column({ type: 'text', array: true })
    comments: string[];
}
