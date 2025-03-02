<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("
            CREATE TABLE tickets (
                ticket_id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT NOT NULL,
                price DECIMAL(10,2) NOT NULL,
                departure VARCHAR(255) NOT NULL,
                destination VARCHAR(255) NOT NULL,
                travel_date DATE NOT NULL,
                is_expired BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            )
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement("DROP TABLE IF EXISTS tickets");
    }
};
