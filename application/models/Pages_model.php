<?php
class pages_model extends CI_Model
{

	//Conectar ao banco de dados
	public function __construct()
	{
		$this->load->database();
	}

	public function add_lead($data){
		$this->db->insert('leads', $data);
	}

	public function consulta_imoveis_all(){
		$query = $this->db->query('SELECT * FROM imoveis');
		return $query->result();
	}

	public function consulta_imoveis($query){
		$this->db->from('imoveis');
		$this->db->where($query);
		$query = $this->db->get();
		return $query->result();
	}

	public function consulta_bairros(){
		$query = $this->db->query('SELECT bairro FROM imoveis group by bairro');
		return $query->result();
	}

	public function consulta_tipos(){
		$query = $this->db->query('SELECT tipo_imovel FROM imoveis group by tipo_imovel');
		return $query->result();
	}

}
