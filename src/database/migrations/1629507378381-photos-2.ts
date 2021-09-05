import {MigrationInterface, QueryRunner} from "typeorm";

export class photos21629507378381 implements MigrationInterface {
    name = 'photos21629507378381'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."photo" ADD "profileId" integer`);
        await queryRunner.query(`ALTER TABLE "public"."photo" ADD CONSTRAINT "FK_d55334717fb208b70bdac62b0a4" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."photo" DROP CONSTRAINT "FK_d55334717fb208b70bdac62b0a4"`);
        await queryRunner.query(`ALTER TABLE "public"."photo" DROP COLUMN "profileId"`);
    }

}
