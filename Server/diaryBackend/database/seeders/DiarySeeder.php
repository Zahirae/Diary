<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use \App\Models\Diary;
use DB;

class DiarySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('diaries')->delete();
        Diary::factory()->count(10)->create();
    }
}
