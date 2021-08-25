<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Informatics extends CI_Controller {

	
	public function index()
	{
		$this->load->view('informatics/informatics.php');
	}
}
