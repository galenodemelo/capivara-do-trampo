const dbConnection = require("../database/connection")

dbConnection.run(`
-- Creator:       MySQL Workbench 8.0.22/ExportSQLite Plugin 0.1.0
-- Author:        galenodemelo
-- Caption:       New Model
-- Project:       Name of the project
-- Changed:       2021-01-15 23:59
-- Created:       2021-01-15 22:42
PRAGMA foreign_keys = OFF;

-- Schema: capivara-do-trampo
BEGIN;
CREATE TABLE "interest"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL CHECK("id">=0),
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "deleted" BIT NOT NULL DEFAULT 0,
  "name" VARCHAR(255) NOT NULL,
  CONSTRAINT "name_UNIQUE"
    UNIQUE("name")
);
INSERT INTO "interest"("id","created_at","updated_at","deleted","name") VALUES(1, "2020-01-01 00:00:00", "2020-01-01 00:00:00", 0, 'Tecnologia');
INSERT INTO "interest"("id","created_at","updated_at","deleted","name") VALUES(2, "2020-01-01 00:00:00", "2020-01-01 00:00:00", 0, 'Administração');
INSERT INTO "interest"("id","created_at","updated_at","deleted","name") VALUES(3, "2020-01-01 00:00:00", "2020-01-01 00:00:00", 0, 'Artes e Design');
INSERT INTO "interest"("id","created_at","updated_at","deleted","name") VALUES(4, "2020-01-01 00:00:00", "2020-01-01 00:00:00", 0, 'Culinária');
INSERT INTO "interest"("id","created_at","updated_at","deleted","name") VALUES(5, "2020-01-01 00:00:00", "2020-01-01 00:00:00", 0, 'Eletrotécnica');
INSERT INTO "interest"("id","created_at","updated_at","deleted","name") VALUES(6, "2020-01-01 00:00:00", "2020-01-01 00:00:00", 0, 'Vendas');
CREATE TABLE "address"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL CHECK("id">=0),
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "deleted" BIT NOT NULL DEFAULT 0,
  "street" VARCHAR(255) NOT NULL,
  "number" VARCHAR(45),
  "neighbourhood" VARCHAR(255) NOT NULL,
  "city" VARCHAR(255) NOT NULL,
  "state" CHAR(2) NOT NULL
);
INSERT INTO "address"("id","created_at","updated_at","deleted","street","number","neighbourhood","city","state") VALUES(1, "2020-01-01 00:00:00", "2020-01-01 00:00:00", 0, 'Ernesto Guevara', '11', 'Jardim Sofia', 'Joinville', 'SC');
CREATE TABLE "mentor"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL CHECK("id">=0),
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "deleted" BIT NOT NULL DEFAULT 0,
  "name" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255) NOT NULL,
  "phone" VARCHAR(11) NOT NULL,
  "address_id" INTEGER NOT NULL CHECK("address_id">=0),
  CONSTRAINT "email_UNIQUE"
    UNIQUE("email"),
  CONSTRAINT "phone_UNIQUE"
    UNIQUE("phone"),
  CONSTRAINT "fk_mentor_address1"
    FOREIGN KEY("address_id")
    REFERENCES "address"("id")
);
CREATE INDEX "mentor.fk_mentor_address1_idx" ON "mentor" ("address_id");
INSERT INTO "mentor"("id","created_at","updated_at","deleted","name","email","phone","address_id") VALUES(1, "2020-01-01 00:00:00", "2020-01-01 00:00:00", 0, 'Galeno de Melo', 'galenodemelo@gmail.com', '47996927485', 1);
CREATE TABLE "integration_center"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL CHECK("id">=0),
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "deleted" BIT NOT NULL DEFAULT 0,
  "name" VARCHAR(45) NOT NULL,
  "address_id" INTEGER NOT NULL CHECK("address_id">=0),
  CONSTRAINT "fk_integration_center_address1"
    FOREIGN KEY("address_id")
    REFERENCES "address"("id")
);
CREATE INDEX "integration_center.fk_integration_center_address1_idx" ON "integration_center" ("address_id");
CREATE TABLE "course"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL CHECK("id">=0),
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "deleted" BIT NOT NULL DEFAULT 0,
  "name" VARCHAR(45),
  "integration_center_id" INTEGER NOT NULL CHECK("integration_center_id">=0),
  "interest_id" INTEGER NOT NULL CHECK("interest_id">=0),
  CONSTRAINT "fk_course_integration_center1"
    FOREIGN KEY("integration_center_id")
    REFERENCES "integration_center"("id"),
  CONSTRAINT "fk_course_interest1"
    FOREIGN KEY("interest_id")
    REFERENCES "interest"("id")
);
CREATE INDEX "course.fk_course_integration_center1_idx" ON "course" ("integration_center_id");
CREATE INDEX "course.fk_course_interest1_idx" ON "course" ("interest_id");
CREATE TABLE "job"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL CHECK("id">=0),
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "deleted" BIT NOT NULL DEFAULT 0,
  "title" VARCHAR(255) NOT NULL,
  "description" TEXT NOT NULL,
  "company" VARCHAR(255) NOT NULL,
  "address_id" INTEGER NOT NULL CHECK("address_id">=0),
  "interest_id" INTEGER NOT NULL CHECK("interest_id">=0),
  CONSTRAINT "fk_job_address1"
    FOREIGN KEY("address_id")
    REFERENCES "address"("id"),
  CONSTRAINT "fk_job_interest1"
    FOREIGN KEY("interest_id")
    REFERENCES "interest"("id")
);
CREATE INDEX "job.fk_job_address1_idx" ON "job" ("address_id");
CREATE INDEX "job.fk_job_interest1_idx" ON "job" ("interest_id");
CREATE TABLE "user"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL CHECK("id">=0),
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "deleted" BIT NOT NULL DEFAULT 0,
  "username" VARCHAR(45) NOT NULL,
  "password" VARCHAR(255) NOT NULL,
  "mentor_id" INTEGER NOT NULL CHECK("mentor_id">=0),
  CONSTRAINT "username_UNIQUE"
    UNIQUE("username"),
  CONSTRAINT "fk_user_mentor1"
    FOREIGN KEY("mentor_id")
    REFERENCES "mentor"("id")
);
CREATE INDEX "user.fk_user_mentor1_idx" ON "user" ("mentor_id");
CREATE TABLE "student"(
  "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL CHECK("id">=0),
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "deleted" BIT NOT NULL DEFAULT 0,
  "phone" VARCHAR(11) NOT NULL,
  "name" VARCHAR(45),
  "email" VARCHAR(255),
  "mentor_id" INTEGER CHECK("mentor_id">=0),
  "address_id" INTEGER CHECK("address_id">=0),
  CONSTRAINT "phone_UNIQUE"
    UNIQUE("phone"),
  CONSTRAINT "fk_student_mentor"
    FOREIGN KEY("mentor_id")
    REFERENCES "mentor"("id"),
  CONSTRAINT "fk_student_address1"
    FOREIGN KEY("address_id")
    REFERENCES "address"("id")
);
CREATE INDEX "student.fk_student_mentor_idx" ON "student" ("mentor_id");
CREATE INDEX "student.fk_student_address1_idx" ON "student" ("address_id");
CREATE TABLE "student_has_interest"(
  "student_id" INTEGER NOT NULL CHECK("student_id">=0),
  "interest_id" INTEGER NOT NULL CHECK("interest_id">=0),
  PRIMARY KEY("student_id","interest_id"),
  CONSTRAINT "fk_student_has_interest_student1"
    FOREIGN KEY("student_id")
    REFERENCES "student"("id"),
  CONSTRAINT "fk_student_has_interest_interest1"
    FOREIGN KEY("interest_id")
    REFERENCES "interest"("id")
);
CREATE INDEX "student_has_interest.fk_student_has_interest_interest1_idx" ON "student_has_interest" ("interest_id");
CREATE INDEX "student_has_interest.fk_student_has_interest_student1_idx" ON "student_has_interest" ("student_id");
COMMIT;
`, function(res) {
	if (res.error) throw res.error
	console.log(res)
})