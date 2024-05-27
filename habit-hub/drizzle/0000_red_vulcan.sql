CREATE TABLE `session` (
	`id` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`expiresAt` integer NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
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
	FOREIGN KEY (`userId`) REFERENCES `session`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`username` text,
	`email` text,
	`password_has` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_username_unique` ON `user` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);