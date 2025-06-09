/*
SQLyog Ultimate
MySQL - 5.7.23-23 : Database - selvamin_mavles
*********************************************************************
*/

 

/*!40101 SET NAMES utf8 */;
/*!40101 SET SQL_MODE=''*/;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `a_payments` (
  `payment_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `contact_id` bigint(20) unsigned NOT NULL,
  `payment_date` date NOT NULL,
  `payment_mode_id` int(11) NOT NULL,
  `transaction_amount` double NOT NULL,
  `transaction_type` char(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_notes` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_by` bigint(20) unsigned DEFAULT NULL,
  `updated_by` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`payment_id`),
  KEY `a_payments_contact_id_foreign` (`contact_id`),
  CONSTRAINT `a_payments_contact_id_foreign` FOREIGN KEY (`contact_id`) REFERENCES `h_contacts` (`contact_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1077 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


/*Table structure for table `h_address` */

CREATE TABLE `h_address` (
  `address_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `address_street` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address_street_2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address_city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address_dist` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address_state` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address_pin_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`address_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1116 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Table structure for table `h_contact_address` */

CREATE TABLE `h_contact_address` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `contact_id` bigint(20) unsigned NOT NULL,
  `address_id` bigint(20) unsigned NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `contact_address` (`contact_id`,`address_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

 
/*Table structure for table `h_contact_types` */

CREATE TABLE `h_contact_types` (
  `contact_type_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `contact_type_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_type_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_nature` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`contact_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Table structure for table `h_contacts` */

CREATE TABLE `h_contacts` (
  `contact_id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` VARCHAR(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` VARCHAR(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` VARCHAR(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` TINYINT(1) DEFAULT '1',
  `facebook` VARCHAR(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_type_id` BIGINT(20) UNSIGNED NOT NULL,
  `notes` VARCHAR(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gst` VARCHAR(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_id` LONGTEXT COLLATE utf8mb4_unicode_ci,
  `due_listing` TINYINT(1) DEFAULT '1',
  `created_by` INT(11) DEFAULT NULL,
  `updated_by` INT(11) DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`contact_id`),
  KEY `h_contacts_contact_type_id_foreign` (`contact_type_id`),
  CONSTRAINT `h_contacts_contact_type_id_foreign` FOREIGN KEY (`contact_type_id`) REFERENCES `h_contact_types` (`contact_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Table structure for table `o_order_accounts` */

CREATE TABLE `o_order_accounts` (
  `account_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `account_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `account_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`account_id`),
  UNIQUE KEY `o_order_accounts_account_name_unique` (`account_name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Table structure for table `o_order_element_contact_types` */

CREATE TABLE `o_order_element_contact_types` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `element_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_type_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `o_order_element_contact_types_element_code_unique` (`element_code`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Table structure for table `o_order_elements` */

CREATE TABLE `o_order_elements` (
  `element_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `element_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `element_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `element_local_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`element_id`),
  UNIQUE KEY `o_order_elements_element_code_unique` (`element_code`),
  UNIQUE KEY `o_order_elements_element_name_unique` (`element_name`),
  UNIQUE KEY `o_order_elements_element_local_code_unique` (`element_local_code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Table structure for table `o_order_line_items` */

CREATE TABLE `o_order_line_items` (
  `line_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `order_id` bigint(20) unsigned NOT NULL,
  `product_id` bigint(20) unsigned NOT NULL,
  `line_quantity` double DEFAULT NULL,
  `line_price` double DEFAULT NULL,
  `line_amount` double DEFAULT NULL,
  `line_order` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`line_id`),
  UNIQUE KEY `o_order_line_items_order_id_line_order_unique` (`order_id`,`line_order`),
  KEY `o_order_line_items_product_id_foreign` (`product_id`),
  CONSTRAINT `o_order_line_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `o_order_products` (`product_id`) ON DELETE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2659 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Table structure for table `o_order_master` */

CREATE TABLE `o_order_master` (
  `master_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `order_id` bigint(20) unsigned NOT NULL,
  `account_id` bigint(20) unsigned NOT NULL,
  `order_element_id` bigint(20) unsigned NOT NULL,
  `order_number` double NOT NULL,
  `order_contact_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`master_id`),
  UNIQUE KEY `o_order_master_order_element_id_order_number_unique` (`order_element_id`,`order_number`),
  UNIQUE KEY `o_order_master_order_id_unique` (`order_id`),
  KEY `o_order_master_order_contact_id_foreign` (`order_contact_id`),
  KEY `o_order_master_account_id_foreign` (`account_id`),
  CONSTRAINT `o_order_master_account_id_foreign` FOREIGN KEY (`account_id`) REFERENCES `o_order_accounts` (`account_id`) ON DELETE CASCADE,
  CONSTRAINT `o_order_master_order_contact_id_foreign` FOREIGN KEY (`order_contact_id`) REFERENCES `h_contacts` (`contact_id`) ON DELETE CASCADE,
  CONSTRAINT `o_order_master_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `o_orders` (`order_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1135 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Table structure for table `o_order_products` */

CREATE TABLE `o_order_products` (
  `product_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_image_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_unit` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_element_id` bigint(20) unsigned DEFAULT NULL,
  `product_gs_type` tinyint(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `o_order_products_product_element_id_foreign` (`product_element_id`),
  CONSTRAINT `o_order_products_product_element_id_foreign` FOREIGN KEY (`product_element_id`) REFERENCES `o_order_elements` (`element_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Table structure for table `o_orders` */

CREATE TABLE `o_orders` (
  `order_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `order_date` datetime NOT NULL,
  `order_subtotal` double NOT NULL,
  `order_discount_amount` double DEFAULT NULL,
  `order_adjustment_amount` double DEFAULT NULL,
  `order_total` double DEFAULT NULL,
  `order_return` double DEFAULT NULL,
  `order_address_id` bigint(20) unsigned DEFAULT NULL,
  `order_notes` longtext COLLATE utf8mb4_unicode_ci,
  `order_conditions` longtext COLLATE utf8mb4_unicode_ci,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `o_orders_order_address_id_foreign` (`order_address_id`),
  CONSTRAINT `o_orders_order_address_id_foreign` FOREIGN KEY (`order_address_id`) REFERENCES `h_address` (`address_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1135 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 
/*Table structure for table `users` */

CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
