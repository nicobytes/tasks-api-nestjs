import {MigrationInterface, QueryRunner} from "typeorm";

export class addPhotos1630865837402 implements MigrationInterface {
    name = 'addPhotos1630865837402'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "photo" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "profile_id" integer, CONSTRAINT "PK_723fa50bf70dcfd06fb5a44d4ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "photo" ADD CONSTRAINT "FK_31f2c69cd18b8442b80b546da31" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photo" DROP CONSTRAINT "FK_31f2c69cd18b8442b80b546da31"`);
        await queryRunner.query(`DROP TABLE "photo"`);
    }

}
