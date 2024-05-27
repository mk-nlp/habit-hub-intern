CREATE TABLE `task` (
	`id` integer PRIMARY KEY NOT NULL,
	`task` text,
	`category` text,
	`emoji` text,
	`bgColor` text,
	`routine` text,
	`date` text,
	`userId` integer,
	`completed` integer,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`email` text,
	`password` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_name_unique` ON `user` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);