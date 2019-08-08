import {MigrationInterface, QueryRunner} from "typeorm";

export class User1565193999349 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "confirmation_token" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "confirmation_sent_at" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "confirmation_sent_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "confirmation_token" SET NOT NULL`);
    }

}
