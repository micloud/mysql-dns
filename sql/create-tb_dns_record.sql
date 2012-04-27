CREATE TABLE `tb_dns_record` (
	  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	  `domain_name` varchar(50) NOT NULL DEFAULT '',
	  `ip_address` varchar(15) NOT NULL DEFAULT '',
	  `creare_user` varchar(30) DEFAULT NULL,
	  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	  `desc` varchar(50) DEFAULT NULL,
	  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
