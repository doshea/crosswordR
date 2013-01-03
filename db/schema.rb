# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130103181820) do

  create_table "clues", :force => true do |t|
    t.integer  "crossword_puzzle_id"
    t.integer  "user_id"
    t.integer  "cell"
    t.boolean  "orientation"
    t.string   "clue_text"
    t.datetime "created_at",          :null => false
    t.datetime "updated_at",          :null => false
  end

  create_table "crossword_puzzles", :force => true do |t|
    t.string   "title"
    t.integer  "user_id"
    t.integer  "rows"
    t.integer  "cols"
    t.string   "letters"
    t.string   "voids"
    t.datetime "created_at",                 :null => false
    t.datetime "updated_at",                 :null => false
    t.integer  "clues_count", :default => 0
  end

  create_table "users", :force => true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "username"
    t.string   "email"
    t.string   "password"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
    t.boolean  "admin"
    t.integer  "crossword_puzzles_count", :default => 0
    t.integer  "clues_count",             :default => 0
  end

end
