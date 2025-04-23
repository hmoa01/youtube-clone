import { relations } from "drizzle-orm";
import {
  pgTable,
  uuid,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    clerkId: text("clerk_id").unique().notNull(),
    name: text("name").notNull(),
    // TODO: add banner fields
    imageUrl: text("image_url").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (t) => [uniqueIndex("clerk_id_idx").on(t.clerkId)] // create unique index on clerkId column
);

export const userRelations = relations(users, ({ many }) => ({
  videos: many(videos),
}));

export const categories = pgTable(
  "categories",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull().unique(),
    description: text("description").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (t) => [uniqueIndex("name_idx").on(t.name)]
); // create unique index on name column

export const categoryRelations = relations(categories, ({ many }) => ({
  videos: many(videos),
}));

export const videos = pgTable("videos", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description"),
  muxStatus: text("mux_status"), // max status is the status of the video when it is uploaded
  muxAssetId: text("mux_asset_id").unique(), // mux asset id is the id of the video in mux
  muxUploadId: text("mux_upload_id").unique(), // mux upload id is the id of the upload in mux
  muxPlaybackId: text("mux_playback_id").unique(), // mux playback id is the id of the playback in mux
  muxTrackId: text("mux_track_id").unique(), // mux track id is the id of the track in mux
  muxTrackStatus: text("mux_track_status"), // mux track status is the status of the track in mux
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" }) // onDelete: "cascade" means if the user is deleted, all their videos are deleted too
    .notNull(),
  categoryId: uuid("category_id").references(() => categories.id, {
    onDelete: "set null",
  }), // onDelete: "set null" means if the category is deleted, the video will still exist but with a null category
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const videoRelations = relations(videos, ({ one }) => ({
  user: one(users, {
    fields: [videos.userId],
    references: [users.id],
  }),
  category: one(categories, {
    fields: [videos.categoryId],
    references: [categories.id],
  }),
}));
