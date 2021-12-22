<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Himpunan extends CI_Controller {

	
	public function index()
	{
		$this->load->view('himpunan/himpunan.php');
	}
}
