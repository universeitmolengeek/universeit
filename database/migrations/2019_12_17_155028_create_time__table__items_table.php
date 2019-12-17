<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTimeTableItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('time_table_items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->dateTime('date');
            $table->string('class_room');
            $table->timestamps();
            $table->unsignedBigInteger('group_id');
            $table->unsignedBigInteger('teacher_id');
            $table->foreign('group_id')->on('groups')->references('id')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('teacher_id')->on('teachers')->references('id')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('time__table__items');
    }
}
