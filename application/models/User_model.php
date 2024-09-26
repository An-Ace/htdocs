<?php
class User_model extends CI_Model {

    public function __construct()
    {
        $this->load->database();
    }

    // Fungsi untuk mencari user berdasarkan email
    public function get_user_by_email($email)
    {
        $query = $this->db->get_where('users', array('email' => $email));
        return $query->row_array();
    }
}
?>
