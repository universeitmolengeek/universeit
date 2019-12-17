<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('note');
            $table->boolean('view')->default(false);
            $table->timestamps();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('teacher_id');
            $table->foreign('user_id')->on('users')->references('id')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('notes');
    }
}
