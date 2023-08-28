import { MigrationInterface, QueryRunner } from "typeorm";

export class Article1691497315812 implements MigrationInterface {
    name = 'Article1691497315812'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`article\` (\`id\` int NOT NULL, \`title\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, \`author\` varchar(255) NOT NULL, \`creationDate\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`article\``);
    }

}
