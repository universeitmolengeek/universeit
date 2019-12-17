<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('comment');
            $table->timestamps();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('time_table_item_id');
            $table->foreign('user_id')->on('users')->references('id')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('time_table_item_id')->on('time_table_items')->references('id')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
}
