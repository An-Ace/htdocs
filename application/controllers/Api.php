<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Api extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('User_model');
        $this->load->library('form_validation');
    }

    // Fungsi untuk login user
    public function login()
    {
        // Atur header untuk JSON
        header('Content-Type: application/json');

        // Ambil input email dan password dari request POST
        $email = $this->input->post('email');
        $password = $this->input->post('password');

        // Validasi input
        $this->form_validation->set_rules('email', 'Email', 'required|valid_email');
        $this->form_validation->set_rules('password', 'Password', 'required');

        if ($this->form_validation->run() == FALSE) {
            // Jika validasi gagal, kirim respons error
            echo json_encode([
                'status' => false,
                'message' => validation_errors()
            ]);
        } else {
            // Cari user di database berdasarkan email
            $user = $this->User_model->get_user_by_email($email);

            // Jika user ditemukan dan password cocok
            if ($user && password_verify($password, $user['password'])) {
                // Kirim respons sukses
                echo json_encode([
                    'status' => true,
                    'message' => 'Login berhasil',
                    'data' => [
                        'id' => $user['id'],
                        'email' => $user['email'],
                        'name' => $user['name']
                    ]
                ]);
            } else {
                // Jika user tidak ditemukan atau password salah
                echo json_encode([
                    'status' => false,
                    'message' => 'Email atau password salah'
                ]);
            }
        }
    }
}
?>
