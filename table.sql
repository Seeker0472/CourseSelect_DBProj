-- MySQL dump 10.13  Distrib 5.7.42, for Linux (x86_64)
--
-- Host: 59.110.55.140    Database: courseSelect
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Temporary table structure for view `aca_Admin_Info`
--

DROP TABLE IF EXISTS `aca_Admin_Info`;
/*!50001 DROP VIEW IF EXISTS `aca_Admin_Info`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `aca_Admin_Info` AS SELECT 
 1 AS `account_id`,
 1 AS `name`,
 1 AS `gender`,
 1 AS `phone`,
 1 AS `email`,
 1 AS `college_name`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `account_passwords`
--

DROP TABLE IF EXISTS `account_passwords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account_passwords` (
  `account_id` varchar(11) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`account_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_passwords`
--

LOCK TABLES `account_passwords` WRITE;
/*!40000 ALTER TABLE `account_passwords` DISABLE KEYS */;
INSERT INTO `account_passwords` VALUES ('01234567890','123456'),('123','123'),('20222111000','Passwd'),('233','262144'),('Adm','admin'),('T01','123456'),('T05','admin'),('T11','122345'),('T45','123456'),('T99','123456');
/*!40000 ALTER TABLE `account_passwords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colleges`
--

DROP TABLE IF EXISTS `colleges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colleges` (
  `college_id` char(3) NOT NULL,
  `college_name` varchar(255) DEFAULT NULL,
  `head_id` varchar(11) DEFAULT NULL,
  `remarks` text,
  PRIMARY KEY (`college_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colleges`
--

LOCK TABLES `colleges` WRITE;
/*!40000 ALTER TABLE `colleges` DISABLE KEYS */;
INSERT INTO `colleges` VALUES ('C01','计算机学院','T01','信息工程学院致力于培养高素质的信息技术人才'),('C02','测绘与空间信息工程学院','T45','测神州大地之经纬,绘祖国锦绣之蓝图'),('M01','医学影像学院','233','test');
/*!40000 ALTER TABLE `colleges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `course_cate`
--

DROP TABLE IF EXISTS `course_cate`;
/*!50001 DROP VIEW IF EXISTS `course_cate`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `course_cate` AS SELECT 
 1 AS `course_id`,
 1 AS `major_id`,
 1 AS `college_id`,
 1 AS `course_name`,
 1 AS `credits`,
 1 AS `is_mandatory`,
 1 AS `Intro`,
 1 AS `category_name`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `course_categories`
--

DROP TABLE IF EXISTS `course_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course_categories` (
  `category_id` int NOT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_categories`
--

LOCK TABLES `course_categories` WRITE;
/*!40000 ALTER TABLE `course_categories` DISABLE KEYS */;
INSERT INTO `course_categories` VALUES (1,'NONameYet'),(2,'test');
/*!40000 ALTER TABLE `course_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_deliver`
--

DROP TABLE IF EXISTS `course_deliver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course_deliver` (
  `deliverId` int NOT NULL AUTO_INCREMENT,
  `course_id` int DEFAULT NULL,
  `teacher_id` varchar(11) DEFAULT NULL,
  `start_week` int DEFAULT NULL,
  `end_week` int DEFAULT NULL,
  `start_time` int DEFAULT NULL,
  `end_time` int DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `class_hours` int DEFAULT NULL,
  `term_id` int DEFAULT NULL,
  `max_enrollment` int DEFAULT NULL,
  `course_status` varchar(50) DEFAULT NULL,
  `course_day` int DEFAULT NULL,
  PRIMARY KEY (`deliverId`),
  KEY `teacher_id` (`teacher_id`),
  KEY `course_id` (`course_id`),
  KEY `term_id` (`term_id`),
  CONSTRAINT `course_deliver_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `staff` (`account_id`),
  CONSTRAINT `course_deliver_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`),
  CONSTRAINT `course_deliver_ibfk_3` FOREIGN KEY (`term_id`) REFERENCES `terms` (`term_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_deliver`
--

LOCK TABLES `course_deliver` WRITE;
/*!40000 ALTER TABLE `course_deliver` DISABLE KEYS */;
INSERT INTO `course_deliver` VALUES (1,15213,'T05',1,16,3,4,'none',1,1,100,NULL,1),(6,12,'T05',1,1,1,1,'三教105',0,1,0,NULL,2);
/*!40000 ALTER TABLE `course_deliver` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `course_detail`
--

DROP TABLE IF EXISTS `course_detail`;
/*!50001 DROP VIEW IF EXISTS `course_detail`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `course_detail` AS SELECT 
 1 AS `deliverId`,
 1 AS `course_id`,
 1 AS `teacher_id`,
 1 AS `name`,
 1 AS `start_time`,
 1 AS `end_time`,
 1 AS `start_week`,
 1 AS `end_week`,
 1 AS `location`,
 1 AS `class_hours`,
 1 AS `term_id`,
 1 AS `max_enrollment`,
 1 AS `course_status`,
 1 AS `course_name`,
 1 AS `credits`,
 1 AS `major_name`,
 1 AS `college_id`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `course_detail_simplified`
--

DROP TABLE IF EXISTS `course_detail_simplified`;
/*!50001 DROP VIEW IF EXISTS `course_detail_simplified`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `course_detail_simplified` AS SELECT 
 1 AS `deliverId`,
 1 AS `course_name`,
 1 AS `course_id`,
 1 AS `teacher_id`,
 1 AS `name`,
 1 AS `major_name`,
 1 AS `credits`,
 1 AS `college_id`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `course_scores`
--

DROP TABLE IF EXISTS `course_scores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course_scores` (
  `student_id` varchar(11) NOT NULL,
  `deliver_id` int NOT NULL,
  `score` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`student_id`,`deliver_id`),
  KEY `course_scores_course_deliver_deliverId_fk` (`deliver_id`),
  CONSTRAINT `course_scores_course_deliver_deliverId_fk` FOREIGN KEY (`deliver_id`) REFERENCES `course_deliver` (`deliverId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `course_scores_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`account_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_scores`
--

LOCK TABLES `course_scores` WRITE;
/*!40000 ALTER TABLE `course_scores` DISABLE KEYS */;
INSERT INTO `course_scores` VALUES ('20222111000',1,NULL);
/*!40000 ALTER TABLE `course_scores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `course_select_num`
--

DROP TABLE IF EXISTS `course_select_num`;
/*!50001 DROP VIEW IF EXISTS `course_select_num`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `course_select_num` AS SELECT 
 1 AS `selected_num`,
 1 AS `deliver_id`,
 1 AS `major_id`,
 1 AS `max_enrollment`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `courses` (
  `course_id` int NOT NULL,
  `course_name` varchar(255) DEFAULT NULL,
  `credits` decimal(3,1) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `is_mandatory` tinyint(1) DEFAULT NULL,
  `Intro` text,
  `major_id` char(3) DEFAULT NULL,
  PRIMARY KEY (`course_id`),
  KEY `category_id` (`category_id`),
  KEY `courses_majors_major_id_fk` (`major_id`),
  CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `course_categories` (`category_id`),
  CONSTRAINT `courses_majors_major_id_fk` FOREIGN KEY (`major_id`) REFERENCES `majors` (`major_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (12,'test',12.0,1,1,'test','M02'),(123,'c语言',12.0,1,1,'test','M01'),(15213,'CSAPP',15.0,2,1,'','M01');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `delete_course` AFTER DELETE ON `courses` FOR EACH ROW begin
    delete from course_deliver where course_id = old.course_id;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `identities`
--

DROP TABLE IF EXISTS `identities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `identities` (
  `account_id` varchar(11) NOT NULL,
  `identity` int NOT NULL,
  `college_id` char(3) DEFAULT NULL,
  `major_id` char(3) DEFAULT NULL,
  PRIMARY KEY (`account_id`,`identity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `identities`
--

LOCK TABLES `identities` WRITE;
/*!40000 ALTER TABLE `identities` DISABLE KEYS */;
INSERT INTO `identities` VALUES ('01234567890',1,NULL,'M01'),('20222111000',1,NULL,'M01'),('233',2,'M01',NULL),('Adm',3,NULL,NULL),('T01',4,'C01',NULL),('T05',2,'C01',NULL),('T11',2,'C01',NULL),('T99',2,'C01',NULL);
/*!40000 ALTER TABLE `identities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `majors`
--

DROP TABLE IF EXISTS `majors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `majors` (
  `major_id` char(3) NOT NULL,
  `major_name` varchar(255) DEFAULT NULL,
  `head_id` varchar(11) DEFAULT NULL,
  `remarks` text,
  `credit_limit` decimal(5,2) DEFAULT NULL,
  `college_id` char(3) DEFAULT NULL,
  PRIMARY KEY (`major_id`),
  KEY `head_id` (`head_id`),
  CONSTRAINT `majors_ibfk_1` FOREIGN KEY (`head_id`) REFERENCES `staff` (`account_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `majors`
--

LOCK TABLES `majors` WRITE;
/*!40000 ALTER TABLE `majors` DISABLE KEYS */;
INSERT INTO `majors` VALUES ('M01','计算机科学与技术','T01','great!',200.00,'C01'),('M02','数据科学与大数据与技术','T05',NULL,100.00,'C01'),('M03','医学影像学','233','123',14.00,'M01');
/*!40000 ALTER TABLE `majors` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `delete_major` AFTER DELETE ON `majors` FOR EACH ROW begin
    delete from courses where major_id = old.major_id;
    delete from students where major_id = old.major_id;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `staff` (
  `account_id` varchar(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `gender` char(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`account_id`),
  CONSTRAINT `staff_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account_passwords` (`account_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES ('233','孙蚂蚁','男','15350002770','xeonol@outlook.com'),('Adm','Seeker','男','15907009329','gmx472@qq.com'),('T01','张军','男',NULL,NULL),('T05','测试:教务管理员','男','12345678','tetete@te.com'),('T11','测试','男','12345678','123654@SEEKERER.COM'),('T45','Blank','男','54654546545','1370435067@qq.com'),('T99','测试:绑定身份','男','325434534','aaaa@aaa.com');
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `staff_identity`
--

DROP TABLE IF EXISTS `staff_identity`;
/*!50001 DROP VIEW IF EXISTS `staff_identity`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `staff_identity` AS SELECT 
 1 AS `identity`,
 1 AS `college_id`,
 1 AS `account_id`,
 1 AS `college_name`,
 1 AS `name`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `stu_course_simp`
--

DROP TABLE IF EXISTS `stu_course_simp`;
/*!50001 DROP VIEW IF EXISTS `stu_course_simp`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `stu_course_simp` AS SELECT 
 1 AS `student_id`,
 1 AS `deliver_id`,
 1 AS `course_name`,
 1 AS `course_id`,
 1 AS `term_id`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `stu_course_table`
--

DROP TABLE IF EXISTS `stu_course_table`;
/*!50001 DROP VIEW IF EXISTS `stu_course_table`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `stu_course_table` AS SELECT 
 1 AS `student_id`,
 1 AS `deliverId`,
 1 AS `course_id`,
 1 AS `name`,
 1 AS `start_time`,
 1 AS `end_time`,
 1 AS `start_week`,
 1 AS `end_week`,
 1 AS `term_id`,
 1 AS `course_day`,
 1 AS `course_name`,
 1 AS `location`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `student_info`
--

DROP TABLE IF EXISTS `student_info`;
/*!50001 DROP VIEW IF EXISTS `student_info`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `student_info` AS SELECT 
 1 AS `account_id`,
 1 AS `student_name`,
 1 AS `major_id`,
 1 AS `major_name`,
 1 AS `college_id`,
 1 AS `college_name`,
 1 AS `phone`,
 1 AS `credit_limit`,
 1 AS `enrollment_time`,
 1 AS `gender`,
 1 AS `email`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `students` (
  `account_id` varchar(11) NOT NULL,
  `student_name` varchar(255) DEFAULT NULL,
  `gender` char(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `enrollment_time` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`account_id`),
  CONSTRAINT `students_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account_passwords` (`account_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `students_chk_1` CHECK ((`gender` in (_utf8mb3'男',_utf8mb3'女')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES ('01234567890','李四','男','132456','2023-12-13','seker@seeker.com'),('20222111000','张三1','男','12345678901','2021-09-01','zs@seekerer.com');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `delete_student` AFTER DELETE ON `students` FOR EACH ROW begin
    delete from course_scores where student_id = old.account_id;
    delete from account_passwords where account_id = old.account_id;
    delete from identities where identities.account_id = old.account_id;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `sys_stat`
--

DROP TABLE IF EXISTS `sys_stat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sys_stat` (
  `sys_num` int NOT NULL,
  `term_now` int DEFAULT NULL,
  PRIMARY KEY (`sys_num`),
  KEY `term_now` (`term_now`),
  CONSTRAINT `sys_stat_ibfk_1` FOREIGN KEY (`term_now`) REFERENCES `terms` (`term_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sys_stat`
--

LOCK TABLES `sys_stat` WRITE;
/*!40000 ALTER TABLE `sys_stat` DISABLE KEYS */;
INSERT INTO `sys_stat` VALUES (1,1);
/*!40000 ALTER TABLE `sys_stat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `teacher_Info`
--

DROP TABLE IF EXISTS `teacher_Info`;
/*!50001 DROP VIEW IF EXISTS `teacher_Info`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `teacher_Info` AS SELECT 
 1 AS `account_id`,
 1 AS `name`,
 1 AS `gender`,
 1 AS `college_name`,
 1 AS `phone`,
 1 AS `email`*/;



--
-- Table structure for table `terms`
--

DROP TABLE IF EXISTS `terms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `terms` (
  `term_id` int NOT NULL,
  `term_name` varchar(255) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`term_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `terms`
--

LOCK TABLES `terms` WRITE;
/*!40000 ALTER TABLE `terms` DISABLE KEYS */;
INSERT INTO `terms` VALUES (1,'2023Spring',NULL),(2,'2023Fall',NULL);
/*!40000 ALTER TABLE `terms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `verification_codes`
--

DROP TABLE IF EXISTS `verification_codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `verification_codes` (
  `uuid` char(36) NOT NULL,
  `code` varchar(6) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `verification_codes`
--

LOCK TABLES `verification_codes` WRITE;
/*!40000 ALTER TABLE `verification_codes` DISABLE KEYS */;
INSERT INTO `verification_codes` VALUES ('05KXnO7wRMzPBcyCIQMJnyQgyzrFfPy0qpij','wgdm','2023-12-30 03:02:28'),('0CMxPGF3BwU866kt3SW7O8DA0lEB3YhIKh57','b6mn','2024-01-02 10:30:54'),('0DNiJOgJKf6Ah5HdbpmANnDWL3j8XhlvEb68','64pw','2023-12-29 07:01:04'),('0pxVb2NHHbwujFhuRjwaptM2PRm5CnhjnrrJ','nnf3','2024-01-02 06:32:25'),('0U7CpLUzj6L38rOE7XZ12oVz6PZkokYZoF5Y','e6cd','2023-12-29 05:30:37'),('10T7HAzBFITGIx827QrzA7CFV2V7wGVwABUP','7efn','2023-12-27 12:32:30'),('123456','nyye','2023-12-27 06:49:29'),('1CIIQHqaAYLq4Cwm1Knijzqb17ixESXgkCzq','fgwy','2023-12-27 12:20:04'),('24nEy6pdvffxb6szDvTpgEDtIsMNRBxzrD8q','fd6n','2023-12-30 03:26:03'),('2Pirby35rIQ5Lagwo4zLbAXYs0zNfKKe9vaB','nbf4','2023-12-29 04:54:49'),('3czeJHiXu3AjUPQNjiJ8XHEKVlVTncmcllHc','52pp','2023-12-27 11:44:54'),('3eeu7wG1EDkv8lCFHG7OMcC52OXZdififvJR','7mnf','2023-12-31 01:35:00'),('40OLYU1lcmQplwGKygFDrgRnzq88Y05D9O4C','abcn','2024-01-02 10:28:30'),('424INeTlERxefvw4t3Y9x4HIslicXaYswhsr','m8n5','2023-12-29 06:06:43'),('45MdR1hVy3e1PimbgllWSlnEjHRWYTlIaool','pb2c','2024-01-03 08:21:44'),('4gcRvt3GxUet2bCCDjavMsjSMVHR9u8Ggp7b','nbac','2023-12-27 11:53:58'),('4rhN7VTfJc8ENM6DNjxyD1OG1X2N3DBYz6qr','46n2','2023-12-27 11:43:50'),('51DZpxxeXbwqrT3eyTJx4SqR7rf4yx4etloR','67wf','2023-12-31 14:56:08'),('5J9dc1EsWkVJjm93vVVOEt2Yu20nqAwUnA9v','nm2w','2023-12-29 07:16:31'),('5MUK0cGRaW8tU95NXKtZtHlIU90jCzTFJSBl','na3n','2024-01-02 10:50:14'),('5nDqsCGEkvv5dAhT2c04XQT1hThxaXKRfMY9','32fm','2024-01-02 09:46:27'),('5qpKHitHGbXHQyAaLApYoBMcf4WYuZeAF2dG','237a','2023-12-27 11:48:28'),('64lg93LBZXEVHoplzwNHSDaP3ClAGC0qBDsP','x32w','2023-12-27 11:40:02'),('6y3N6EmZT5daTqqRBZJEXE8O4r9tTcNNINse','mxyx','2024-01-02 06:14:45'),('6z8lFU19QW1uCmoJdLmgEBpAT8eK6uAmBbgn','g5ee','2024-01-02 08:42:50'),('7EJKzsMftyhFFkXHtrnWGQ8h2bVvZsHJmyKK','f5wp','2023-12-30 03:26:02'),('7ii6J9exMY12M1ZXSmM5Pwj8E61KhnO1GnQs','eb8y','2023-12-27 11:33:38'),('7jOsCCna3Dl2H9oAZ29LvdV1sOBkBhZVy2co','dw4p','2023-12-27 11:30:19'),('7n4boelDd11YFtUrq1wqeAjDsUvz8Qpt2rvN','8f32','2024-01-02 08:04:18'),('8fuDY10hGseJuvbJltMZylonsLvlIzr8epxN','nn4g','2024-01-02 06:43:31'),('8gubkAmj3KKaLDn8K3OtmyotcgjbYopJUmx5','4xay','2023-12-27 12:45:44'),('8J9azPkLhwDKafj0FL91Ic9zdho5bHL6YaPN','c3nm','2024-01-02 06:26:19'),('8JAMMbFsYt4J7o8XjlRauSAqFAsuT3E8JASH','mad3','2023-12-27 12:29:28'),('8pCbKBXdOnkcPRAuM4rM6YDuf6kXN2E9D7aO','4m45','2024-01-02 06:27:33'),('8rCYG6eZAq37pw7UHn7bfUk5jUqYAOVHglSN','p8ac','2024-01-02 06:43:33'),('9HHHB5ZNdWvExiBP83X6jEv6mVlhpaOGD9F9','3a7f','2023-12-29 04:54:47'),('9PuEq87jgK4tNSkmzubMMJU9sNWfu8hPNr6z','pngx','2023-12-31 01:38:07'),('9ZQpWALxROqgP8kLGW8ZkBeVVctM4qNy3xRb','n747','2023-12-27 11:33:38'),('a5TnSHdqkWotPfjcJyw9sJvtvxMGsKXFEA15','74eg','2023-12-27 12:21:10'),('AKWfMRFQBVodgwNI0kOEsjLCOnXRPmnG54O0','dggp','2023-12-29 05:25:48'),('aqrj57BXZW7aYeHEqGpve0ziMQigwaLhySYV','a6d3','2024-01-02 06:19:02'),('AwnF1wspanFZqJPwnns39P39GoZTik4Sxb7u','b44e','2023-12-27 11:44:27'),('bakq59zRCgjKPBca2IJBVSTdD9fIeQDPmGkZ','y4yf','2024-01-01 12:25:03'),('Bglm2yDEx0v3BU5hwh2bO5qP87hCE3rPRTiE','f6c2','2023-12-29 07:22:09'),('Bjbi4NmFSQpm7SBCgxLWfnWxsfaiC8B2LewU','8dxc','2024-01-02 06:19:32'),('bNVYTZyXn2D43AoP66gOzglZDjOlXxxnz3qc','6apf','2023-12-27 11:32:41'),('BuhfNbmzcmWuLTi646jXZ8WN1dFTpL02eBX8','8ye7','2024-01-02 05:55:11'),('bxA5VtDpdK3PdnLBuU4FIBiDFp9FtlrVcMOP','dxmn','2024-01-02 08:33:02'),('c00ruW5fsBPHPtgTUxfaxvdTWT8wYA0PDpqc','em2a','2023-12-29 05:54:32'),('C6E91ZxxanvVzAWoIBe0CHAYDQXUemphPeHD','m5db','2023-12-27 11:41:06'),('C6UZN5gMkFA7YhYSRwV8gwKkQh3S54WPY1l0','6e8e','2023-12-27 11:50:33'),('C9zN9zZ2id417cEW2oTdbCqYvTqWiUDOyQsh','w6a4','2023-12-31 15:06:53'),('CaDFtqmQdUDvq2DL6A7pGGPQC3lby2V5TcQw','mapn','2023-12-27 13:00:16'),('CfTnShA1mz8nEGJmdD8DTMwvDeBKR0XmPomv','nnfw','2023-12-27 12:22:12'),('ck1OiH8VyVKprL9WTIZfrgjI4N5IuZ0h6bl6','fd77','2023-12-27 11:24:25'),('ClxYjiOpJHXyW5dvpz7njYh9uk7Npf0oYdmy','c357','2023-12-27 11:26:24'),('CqnZ6dFJUn3ZO04oBaL5Fenpnpz6tZ3n3uL0','x2fc','2023-12-31 14:43:44'),('d3PB9746OyHIjotSWnkRrwmlR2sIeEZosUwV','ybbc','2024-01-02 08:32:52'),('D86ZfZp2UN38pbZxCOCv7CDxvaD9nbkSJVBj','enfg','2024-01-02 06:36:58'),('dAXN2x1JUaO8yz2QpvDp4VeRkMQrbaDQ0TKA','xcy6','2023-12-27 12:34:42'),('dD3qSooSjzyntt1bgrif25crXNrmMXDRBdDI','e23m','2023-12-27 13:35:51'),('dGhN87UIhiQTbYHWMLgzjRGa9TV4j2gxNhMC','7nyc','2023-12-29 07:17:22'),('DhZEs5TSETXrTQj56nhzZenuXPp1zY0AOKJ4','75y3','2024-01-02 06:33:12'),('DkVZXcb6BnteQc7lMdG7jKrLqaC0gqUb0xY8','we8x','2024-01-02 01:40:53'),('dU38Es5lsn4tRxdOLhQ8HwXr2HQQgZx1rRUe','g8dw','2023-12-30 03:26:38'),('DXtEHoyUfnyZKtVXCiHgQM3RjtvHEV0RZGzw','7ama','2024-01-02 10:46:06'),('dZfNGmhqAPLKDicyFilvGQl0wrNt32x0k4vO','n8nn','2023-12-30 03:02:59'),('dZkCmEgkqpvzK80ipmuly6Y3qdZ0EzZ7E1Ez','p6mx','2023-12-31 05:06:26'),('ECcttDj728JS9oTVDW5fAexdIyFErTIL86R0','axwy','2023-12-27 11:28:41'),('EDafb2ZaN3po8xQ9ixpsRj5bQG4kRmKOzd8s','7pnc','2024-01-02 06:43:42'),('eKy91UpAb57FASdwnJEwZ9hqD49WLxf2js77','7pdc','2023-12-28 08:54:06'),('emDjFEbuJU3xB4sW50H4INvEPkM4VOGxQySk','wn8c','2023-12-27 11:37:44'),('eoJydaIclZIwEZR1Yvl52PNpWSZHMj35RHk8','ew4n','2023-12-27 12:29:18'),('evJJ9DK27yseRzQ6FJ5QxWQFYugWBLHDa5xp','xccf','2023-12-27 11:36:33'),('eW7aSHLGKzBBru135M37tJ3xU5s7IIQOggcl','73x5','2023-12-27 13:01:29'),('F3SPGvFV1He6yXVH8odk5fkXU6lbjCgJhYVp','cna8','2023-12-27 11:26:07'),('F4K9ogOPG60rsQRPD9oXxcCuPg5AihdphAED','emnw','2024-01-02 05:55:20'),('f7Y2TKW4DBSjuzX4YIne0yaTSAjB8YsnHtSJ','p8b5','2024-01-02 05:54:34'),('Fa1czujyaoJ7aC2FJUCWG4NeVFvsxLX5QhIG','ccff','2023-12-31 15:07:27'),('fp1UoaysCiG3zGKnCN2iwEcFxanMgmepHSW5','3f45','2023-12-27 12:40:54'),('fQpcJJR9Wa9R8TxR14MbI6ZBbNKsTk6qK5Aw','8ady','2024-01-02 06:34:02'),('fuAMDfe3xNKZVEj1tt8Cxgo5P5SXlVHhPR5s','b7nx','2023-12-27 14:19:34'),('fuoWehgyIpIraxJ5gYV5adQvAEXUTQAShGVA','5pmb','2023-12-27 11:16:09'),('fwGM4FFaO64b6UDqjICPwNN07HL0pMbxJ4P4','n34n','2023-12-27 11:45:30'),('g7eUIULBxqOpWrspkbmlcEEmmzWpT4nQb5Vt','ay5m','2023-12-27 12:34:02'),('GAO7neX6cOj7tcNTBZ7j8CEpYlVLIxGt8M77','676w','2023-12-27 11:55:17'),('GcQouacBAy6IW81RGIMOSRxOxHGHPQuAUL9x','ce5b','2024-01-02 07:26:52'),('GgI2MCB1AolA6iuDTvvetP9pa20MhgYPkFWt','822d','2024-01-02 08:14:57'),('GHSNd8bVwivWunzqwo7vdCFVctTi3jeOEtzK','gpw4','2023-12-27 11:32:38'),('GJHaLqWUu8LAVu8uuzNi5FhxoTHo8KnV0u3c','wwgy','2023-12-31 14:22:59'),('gNjHLITWaimM3ruHdMQJoLfGDEcGtraFCVj4','34n3','2023-12-31 14:42:21'),('GpuAQbdXqalQzDwU5AZvqHjDGqS62qoqzaTC','dfp4','2024-01-02 06:38:11'),('gsfcTvlsZ7zNNxpVGIgDUw359PcEm2oOYFBW','gyn7','2023-12-30 03:21:02'),('gUTGR6nSvp4cd3Nn97v7YwiZ2ehS8iCWkTCp','np3w','2023-12-27 11:44:20'),('GypxSoyMVSTclGyiKr314EiDW1pcPnag1SXY','4bd7','2024-01-02 06:37:09'),('gZZr5bsipgMBSfxjptvk7093W5S32qo8PraH','nbfe','2024-01-02 06:42:56'),('H9iKKOvo5Dvynp3wTLHkcp4JR3pM6jAZER70','nb7m','2024-01-02 06:31:46'),('haP5CMgxZkIzRHXZY1sSozeOUhFnpXZAUQMp','d8c3','2023-12-27 12:32:22'),('hEKB2y7EOXbeXs9vxqAg5j2TZDUX306fYqHl','aan6','2023-12-27 11:27:34'),('hilFNTGNRHGO1BDyyFHFuLY0Lv3JZbQqRr92','ey8x','2024-01-02 08:14:34'),('HSF5iGnO4QIqeOfeUlE7rgVpD4jtAAVQuVXZ','g544','2024-01-02 08:42:11'),('Hz926PmMP95KcHW4ooKLjDmcvh7oW0rPvg2k','cw83','2024-01-02 06:36:10'),('i2jbDyVCj5jQ9Sjh0UiHjVsDxkW85FWUEUFM','3mm6','2023-12-27 12:21:31'),('i5LjbSyHzEaPupesDDurXJpevQFLuhzvDUgY','3n4n','2023-12-31 14:53:41'),('ieDApg4iGmzQ3KdDY0tI3mYUfJJ4aFVxgfjw','gdp2','2024-01-02 06:13:29'),('iOygol0W8WvQewwVqlocG6kEOsaqQXMdAWdK','ce7x','2023-12-27 11:24:40'),('iqpWZ2SrNPaFiOvx5Q5kgHpBvmhRQhCQsb8v','c36w','2023-12-29 07:16:52'),('Iy19XlTcrVJbeqS92cDbPtrwtquW6xw9zWcV','p744','2023-12-31 14:24:03'),('J2Pk0uaqWKknq1v1t2moplkyihrVn43vtD5f','26b2','2023-12-29 05:45:48'),('JaIG5UWCG5YKVO7z8075GK5EfyUQQw6LwpIc','wpcy','2024-01-02 10:27:26'),('JfOgGeHw8G9QWcMQTQjUuEtOf2rklWEG4sTN','bncn','2023-12-27 11:25:50'),('JG3W0BujnpP7vngiMNYxOX5MppVDDTUNi2Sb','7nwc','2023-12-29 08:12:14'),('jKZf1z01o3VTYH1hkJNsBx6TSjcer06oTbZW','x3gc','2023-12-27 12:34:14'),('JNl0tQt56Se6GZBP1OyJHkaNh8tfZYBgSH7y','7nn2','2023-12-31 01:01:59'),('jqoOdDtNejULrohxO6T3oBeNahKST5WANNSF','dg5a','2024-01-02 05:55:23'),('jyeNu6TtnndUCXdr3VkqGE87x4NeaOg3SkB9','n8c4','2024-01-02 08:19:24'),('JzySTEVMeshNvX1yXRw0Y0F62Wk7PoEid0Yh','w2mc','2023-12-27 11:25:23'),('K4jPl0UHQkrEUMcy53ReLsR3XnQNQvYRF5F6','m53x','2023-12-27 13:37:21'),('KaNdKjvMMr1kO4Y8yTgtnwUGneePlqJMjLAg','wyec','2023-12-29 03:02:58'),('KeSw9PLb250YuoNwQUgQrd3zBLjLQcywZ7o4','edxa','2024-01-02 06:15:07'),('Kf5XQJkMMUvUGfMHKpy4RTX9aShK2XK96Tj1','newx','2023-12-29 08:10:50'),('kfxtiBEeQ0A0K1ON1oMjX8PXbDjW255cZyKD','yg8f','2023-12-27 11:31:13'),('kjFceQWinKoWdi8h3sIGK0z5g3owUMolqDJy','pw6m','2023-12-27 13:00:48'),('kLeYgFe258vP90LidMx0Wh9bN2oi5eQvTicA','w4p3','2023-12-27 11:44:10'),('kxlwBVdOZEhcZUH3c6ti8wiXDdFwmgkm6rKA','f34w','2023-12-27 12:41:29'),('l0ZyY7780NNPxyGXO2tzPIEJqlA8WjEijH5w','46pb','2023-12-27 11:24:28'),('l1xGjSFq0GWXZuRdcZYJ7X3NvEgqR7BtF2N8','4ywa','2023-12-27 13:02:00'),('LbEjD7R8SL2hyvAQAlWKR9R5zmqAr79bckpu','2ecm','2023-12-27 11:25:30'),('lEMi15ogDppLQRaPVrufg3iMJgBd7GU5Wl6P','bay3','2023-12-31 14:54:50'),('lj6lI9HLmVwS1p6344zN6vmAAm3k6blqx7Ia','4wm8','2023-12-27 11:51:21'),('lMZBJDKTXNdUEhXCHaGkH6GY8isoL5eWm0Bq','pf65','2023-12-27 12:18:07'),('lQvxzQ1qfug0SgbxKd5Eswc5MKMmYjZcvIN1','ne7n','2023-12-30 02:09:51'),('lWsaReIueyMyKDWuJnWakPTYEUSWWT6EHOTs','fd8d','2023-12-29 04:54:47'),('M6x4bVVuRdqnsixTQAbE8Ka8SyY3X26P3yJ1','cmxg','2023-12-28 08:54:57'),('m77ZSWmU36K92ePiuT6y3JlKeQsGUNZdj2h0','g3pb','2023-12-30 03:03:34'),('MMW9lXHgsdDWMXnkRFadr6xKae3ss7WXbIvH','w77y','2023-12-29 03:18:14'),('MqDgOr2CaqmEHjICeCarbhMvMIzPBHVJI27R','n5df','2023-12-27 12:29:54'),('mQDiEkfRfOtXryaG5MDm9luDVW2Z1oWaNdBV','nfn4','2023-12-27 13:02:07'),('MtWGcqwhvY2q51YqKpiSgb3IGnpDD9jJPxi2','nd8w','2023-12-27 11:45:27'),('mvEmZPZA4AML9WhKN4NIPKTt6UszsJtPOh50','emm4','2024-01-02 06:14:16'),('mvLoJSj4nZnwqi7z1pHwEZ99nmuF0HEHxNNj','ewcx','2023-12-30 08:57:50'),('mXSzOvKmYNbbZy0kRDyVUfqV3zqqdafXlFKh','yg2d','2023-12-27 11:31:25'),('N2t6fjTjJ1qoM57cejxOoZjEgHXrjkqkPrhO','dxy2','2023-12-27 11:33:38'),('N6s4ZVZyMvirpeTSaZOQN0jdmPcnMqhCIFyW','dn2p','2024-01-02 08:17:02'),('NdO1OcA64WU12YvIGn6VVLrKHLPjdUonY1Lw','n3pa','2024-01-02 06:14:35'),('NNZffQbLOZJrEAAOjOnWIYTfyXZBftEh2Hs3','63n5','2023-12-27 12:26:52'),('nzQgSNtG9HKn55MnhYJhTKZUmWLTyAlmvA0f','m3cn','2024-01-02 06:31:43'),('OePhV92P7nrcBJFqgUeR0kJSmcXDgQy1sV63','g7fg','2024-01-02 08:18:57'),('OG8U5KF2N0aWkyer4cW0Q40jVHxkAnQAfHTM','mnf6','2023-12-29 02:41:11'),('OH82bya7tR56oJ9A1aCxM93uej5B3X7varzO','d36w','2023-12-29 08:07:32'),('OMyB5zh53DOhEVf6lvuQcAx4Sda3KrePPI2V','6afa','2023-12-27 11:32:07'),('on2RQHe1V95kLqh5oXlCpS0G2Et6soSZWlOP','326b','2023-12-27 12:30:37'),('ov7o6tm76ggqQ3fA8PvJBgoXPoAnhwxyimeM','p7fx','2023-12-29 05:52:39'),('P4FEmjtWwdbfumBQ5xWYv7K0TuAqRgJwFRhm','x736','2023-12-28 08:50:31'),('pHwNsd0sKDdMolRnq6Uv1oTVjtai0bxmAkPN','abb8','2023-12-29 04:54:46'),('PKG4n33o2Yz2gdn0Zc69LNYXH73HnIUVrtNl','yc87','2024-01-03 08:30:38'),('PmUdD8s9BDkpZlsGrytL4m3xRnqv4FGDmD2d','4nnd','2023-12-29 07:25:26'),('Pp7fBnoexLD4MQipJNciuNxmnwcXmGC3mrTy','amg6','2024-01-02 07:32:10'),('PriFXEwRPEkVoLf4DPphkVGtBWhIAXhNcc6U','x7y2','2024-01-03 06:07:11'),('PSHsXof9AZVLHIE8zDtS5dYtvlgXSPcBKSyF','bp57','2023-12-27 11:49:35'),('pUKdgZVUGhaYHR2qtMxLpzTczLTfUNHtjreL','y8w3','2024-01-02 07:53:26'),('pXUWt7uMeNPmqw3IdAxEtLCoeyEJ3eekJXQt','7n4g','2023-12-27 12:16:00'),('PYNRqVQucT1Xaxe47RHAUqQ0dH0S60mKdyDc','bneb','2023-12-29 06:57:45'),('PZi6qtzCRk6SlshCdquW6dATOly4GFk5upYz','gca7','2024-01-02 06:45:41'),('QCtMOWiPG6CqcE7GuqibvspVBlyMZWv82qN2','882f','2023-12-27 13:02:27'),('QeDzFtOcs34A97RRP9X8pTG32oR1IzrumrJR','88d3','2023-12-31 15:22:59'),('QfpGAfj8C2poPy43SFcN4vByLjwALTgOMGYN','3mw6','2024-01-02 06:14:39'),('qgiFKutnHCXMLgq5uLpILNKk0TEKHbrE0WCY','m37n','2024-01-02 06:29:43'),('QgWKGSIGbFIaFVHkM2dcrDn2zFV7BTEGrhDn','3gbn','2023-12-27 11:43:06'),('QOuZ3iB07lbARVn3R4inNYlsdlEZlI5ZBAMu','52cg','2024-01-02 08:02:49'),('QRpih2JppCmuqbRiYXLT37lR5XaPrsbvKkT8','d5b4','2024-01-02 06:37:24'),('R1tGBsdMjWhzs42NcRqQ9t6lB2m06kA6Woh6','3ewm','2023-12-30 03:21:59'),('RbNa5g3w3KL0enqD1sIaDeIbFGzRUyjGq87e','bffm','2024-01-02 06:12:39'),('RfNJNWdJIdvZ7AmWceyU0UeTAVQSc2uFd51y','dgd6','2024-01-02 06:27:46'),('RI4hjCeQr09p8pVUJY8myIAf3NNrGEOgvpkt','24e5','2024-01-02 08:03:16'),('rixij6vU23SIz3oZgoS1pgLeGltX3O2q3UWw','g34e','2024-01-02 06:26:30'),('rPekvup3jsIdtOvFNeMx3igiRB5mhE6p1l3M','8npa','2024-01-01 12:25:50'),('RRXDIFZfCkdLP8zkg9KZiIpIdoK5eTP0H32w','3app','2023-12-28 11:27:25'),('s0pSlLf2V0CH2Wn0KVtMcqvKM6pPvzMENprr','ence','2023-12-31 15:04:53'),('S0U8653bnbqkBfQwInQFGpp4p9j8dBodFpHN','fd6f','2023-12-27 11:32:42'),('S5CNUw4qfo5G7WZRDLU1j9945JJQQ726mtv3','8w3b','2023-12-31 15:15:17'),('SH6rTeDooyjjTbxy87z2uhBOyoLmAUZNKOtd','e3py','2024-01-02 06:36:47'),('SJ1oDviSqCbhhSgTtCtL0wNSAYmLzC07WPUS','n5m5','2023-12-27 13:00:54'),('SkzPCv5wcw4jyedvoeDK4nVyOjSAxZVjOMZa','d3ex','2024-01-02 07:52:47'),('sNglq45YSaBiBFjiL0XJE6URLrGxYXRaRRxT','5fmn','2023-12-27 11:47:40'),('sO6m500BIqcWlunC4BLD21LDBglfeZ5ICPXW','3bwm','2023-12-31 15:17:32'),('sTE74jcaG1n4AswITVoDgkb8053evhFSYwcO','wwen','2024-01-03 06:09:15'),('sTvUN2A4qaLIbX8z95vFzjEjtfQUmyQW2h2m','n34d','2023-12-28 11:27:54'),('Su1yohqjLiZhftUwMZIE22mmDlQt3wNkR1YI','6mbg','2024-01-02 05:54:03'),('sZxHgMm26cR0bcBEIKgfeLXdfycMUIbEsj95','awx5','2023-12-31 14:43:10'),('T4CHseHZMcetc2V9yqKdcHbL5Ar3ca29mTT5','b6dc','2024-01-02 06:32:19'),('t4Txn6GAUXNtjuMZNYmRVxnGFA8VlXgZtmM5','3yg5','2023-12-28 05:02:46'),('t7rB2h1eJNYfq8ykzb2VN9qynuPptV6M19sd','fa3n','2023-12-31 13:06:38'),('tUdR8alFsiRkIZCv4akAw2xKvvDM4pwDzaCo','n3f2','2024-01-02 06:25:23'),('TvhOhxFUWfw8VouiXAxzyDP4Hf7YcZYVfdW4','83xg','2024-01-02 07:32:03'),('tVzuwChZKmOJqPhvMhCNVGG7o9sk6bbii2tZ','p7dn','2023-12-28 08:50:59'),('U3ah0XwsbskLyI4SKSlK1XZ8e2h6K4THQXiK','gyfp','2024-01-02 05:55:58'),('u3lMUx9EmvcaCDZ8bHfJNqA7kWbkGgDP0GTk','e3m8','2023-12-31 15:17:34'),('u3QEMwCOYux8Dugz7bDyKt5L44wVx3rjFGvn','83bc','2023-12-31 15:01:31'),('UAmE4iITzSX5U7Hbvqf6VvFEGaKu9ykbyZE1','5ny5','2024-01-02 06:33:51'),('uWO1uoQTNhmypkFEfdoNOFFoPtQm2XLgJxVp','pxg2','2023-12-27 11:31:58'),('UX0b9ZKfQmGVueXWMmSo5v0Uhwh80wvmHwZ3','magd','2023-12-27 12:37:40'),('ux9wRiaUWTx3Wt76JCEI8BlLtQyPOjedmtpu','mndb','2024-01-02 06:14:00'),('UZBr4e7syLP2ZRvLinV9Msgblo8Ce7QTkS2Z','cbyc','2023-12-27 11:36:33'),('v4Mm3XotvKovpl8W8QDmLIvWulq4LAiGpYDP','fg7c','2024-01-02 06:36:35'),('v5HfqxqAzbSnSoWYXIkdZVWBfyS9k7u7HGxv','py68','2023-12-29 07:07:45'),('vbCcuZLJXadZUNOoss5PK65BRKXrjQKUYYab','8fnf','2024-01-02 06:33:36'),('vCwaiKMbtTCVATRlNxL33w38bnMdY81JbvIS','pgw6','2023-12-29 05:23:33'),('vDP1Zwyl84YbwCXCUPbc8elOqD4jgjLAiAZq','nafm','2023-12-27 12:38:45'),('vJCERBBXWWc7tWzHl9R19nU1sn142qI36G1A','y8mb','2024-01-02 01:51:13'),('VLyfeLaMy4alIlznRtMTO14uuRQ1llofq5Io','2nyp','2023-12-27 13:36:46'),('Vpj5NUOGvm7TeAWtsZvG6LzTMjMrKT1HliY6','n6xd','2023-12-27 11:23:04'),('vr0fXQq5oocu46BzLICZtklECue3skDhlMgi','gac2','2024-01-02 06:30:12'),('vvz27Rg5BrWo7b6FxUEKkgaxuk2EgVF0gpIm','ydxw','2023-12-31 00:58:54'),('w8BIt2GiTLzTlB5jUS0tT9LD1yNx3LARaQLG','bpec','2024-01-02 06:34:26'),('wafBr3ytP8J0Lt44bDUVqNgtWgbtTd3MTqwD','np3p','2024-01-02 10:13:37'),('WoZPZgrvs6Y7uXj4maUz9FfLy07R21J4cwz6','45ga','2024-01-02 06:34:19'),('WrmnpwyDluaQs0fqV2j9r7r8uZ0eAy6BIfu8','fy53','2024-01-02 06:13:32'),('WvG9nlUOUEJoa6bksClPRCzG9KESdKjsTRAj','dba4','2023-12-30 13:56:34'),('WW2lAOvwLmTJxTgm7PGAIyvlv62ZgL1bTki6','x5gf','2023-12-27 11:23:08'),('X8BSgXUo2KNnyfrxMLVjbop86h1ilpVnT9fq','ney5','2023-12-31 05:35:10'),('XCzcPifuabjZFIpSFSbt6mZpokzmo1G7Iobw','n24n','2024-01-02 10:06:27'),('xFgptgZl25Axvvu36FNHLdGYavlkjUv9qVY7','dcdw','2023-12-29 07:17:25'),('xIxEu5ec2X2vX7KDsf6c79SMhRYiMOOoNFAV','y4yc','2024-01-02 08:02:31'),('XoLzVaifW1FbeRxaLwLOZ5AI1QE9bp7tKYFE','7ma2','2024-01-02 06:39:43'),('xtLGHwwXOtKUFZpQHgibYqvKNHUY2u6CHveS','acwy','2023-12-30 01:50:41'),('y4ws6NENfGMEn0InxLxwAqZp6L9r1RsNEjU4','bn4d','2023-12-27 12:30:53'),('ydbjEfuuFQVmA9dBU22tdQtms0YYFlt7VPEL','mxnn','2023-12-29 04:51:25'),('ync4mStsSyZhj2YaoPbGdosEfzNSx02IQhaU','nfpe','2024-01-02 06:15:44'),('YoMrrWj6U89b0ybpDfXrYaeJoSADzpk4N3nI','f2cm','2023-12-29 04:52:37'),('yQpEGlDaWQbQgiRGNzZlCPYIGisScZaTc1nt','x5px','2023-12-31 14:24:52'),('ytmfykqnhoWO7n6NsiR3dTUEJ0iXtTnn1Xt8','c3ww','2023-12-29 04:52:14'),('yUwbJMZtt6oq0Kw4gO5M50gt20axFpRxoDev','8n44','2023-12-29 07:20:20'),('yV9tBViFEuKbxw8fzVpHuf9dauE4QUa4AE0A','65pn','2024-01-02 07:33:14'),('yvp2E10ToIwVLrYfqtmJIf5Cinyuzlm4HSdh','3nxn','2023-12-31 14:29:23'),('yWH1iOsjOABArdk1Gd7mJqiVLp6Hc2dyCfBl','m6ga','2023-12-31 15:20:29'),('yY1mJUorblWF5Nw60ZBT7HX9HSoDSZP1KEDO','bff3','2023-12-30 03:26:38'),('YzPCVtdA3bfJHvjX5fWlV2inTEuDhkXIk9pI','yfpf','2024-01-01 12:24:05'),('z39ifSdtwvqPkFCoQ879bGGh55HQlBKYIJv2','gbnc','2023-12-29 02:40:41'),('ZfnUizWcy8rB0D846pEIrEiBjTwmjp39QAUe','426p','2024-01-02 05:51:51'),('Zr5muTfCRdzSV4C488BTlC0JIH5oWzZhClYK','4n2x','2023-12-27 12:58:31'),('zRinb62xJpPF9Zyf5NIJDIJw2B00N80RE46u','688c','2023-12-31 14:15:08'),('zvEzsBN8xadK9fm8d2VAiOGF1YEhiZUDVf7Q','3x72','2023-12-30 03:21:08');
/*!40000 ALTER TABLE `verification_codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `aca_Admin_Info`
--

/*!50001 DROP VIEW IF EXISTS `aca_Admin_Info`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `aca_Admin_Info` AS select `staff`.`account_id` AS `account_id`,`staff`.`name` AS `name`,`staff`.`gender` AS `gender`,`staff`.`phone` AS `phone`,`staff`.`email` AS `email`,`colleges`.`college_name` AS `college_name` from (((`account_passwords` join `staff` on((`account_passwords`.`account_id` = `staff`.`account_id`))) join `identities` on((`account_passwords`.`account_id` = `identities`.`account_id`))) join `colleges` on((`identities`.`college_id` = `colleges`.`college_id`))) where (`identities`.`identity` = 2) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `course_cate`
--

/*!50001 DROP VIEW IF EXISTS `course_cate`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `course_cate` AS select `courses`.`course_id` AS `course_id`,`majors`.`major_id` AS `major_id`,`majors`.`college_id` AS `college_id`,`courses`.`course_name` AS `course_name`,`courses`.`credits` AS `credits`,`courses`.`is_mandatory` AS `is_mandatory`,`courses`.`Intro` AS `Intro`,`course_categories`.`category_name` AS `category_name` from ((`courses` join `course_categories` on((`courses`.`category_id` = `course_categories`.`category_id`))) join `majors` on((`majors`.`major_id` = `courses`.`major_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `course_detail`
--

/*!50001 DROP VIEW IF EXISTS `course_detail`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `course_detail` AS select `course_deliver`.`deliverId` AS `deliverId`,`courses`.`course_id` AS `course_id`,`course_deliver`.`teacher_id` AS `teacher_id`,`staff`.`name` AS `name`,`course_deliver`.`start_time` AS `start_time`,`course_deliver`.`end_time` AS `end_time`,`course_deliver`.`start_week` AS `start_week`,`course_deliver`.`end_week` AS `end_week`,`course_deliver`.`location` AS `location`,`course_deliver`.`class_hours` AS `class_hours`,`course_deliver`.`term_id` AS `term_id`,`course_deliver`.`max_enrollment` AS `max_enrollment`,`course_deliver`.`course_status` AS `course_status`,`courses`.`course_name` AS `course_name`,`courses`.`credits` AS `credits`,`majors`.`major_name` AS `major_name`,`majors`.`college_id` AS `college_id` from (((`course_deliver` join `courses` on((`course_deliver`.`course_id` = `courses`.`course_id`))) join `staff` on((`course_deliver`.`teacher_id` = `staff`.`account_id`))) join `majors` on((`courses`.`major_id` = `majors`.`major_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `course_detail_simplified`
--

/*!50001 DROP VIEW IF EXISTS `course_detail_simplified`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `course_detail_simplified` AS select `course_deliver`.`deliverId` AS `deliverId`,`courses`.`course_name` AS `course_name`,`courses`.`course_id` AS `course_id`,`course_deliver`.`teacher_id` AS `teacher_id`,`staff`.`name` AS `name`,`majors`.`major_name` AS `major_name`,`courses`.`credits` AS `credits`,`majors`.`college_id` AS `college_id` from (((`course_deliver` join `courses` on((`course_deliver`.`course_id` = `courses`.`course_id`))) join `staff` on((`course_deliver`.`teacher_id` = `staff`.`account_id`))) join `majors` on((`courses`.`major_id` = `majors`.`major_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `course_select_num`
--

/*!50001 DROP VIEW IF EXISTS `course_select_num`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `course_select_num` AS select coalesce(`numbers`.`num`,0) AS `selected_num`,`course_deliver`.`deliverId` AS `deliver_id`,`courses`.`major_id` AS `major_id`,`course_deliver`.`max_enrollment` AS `max_enrollment` from ((`course_deliver` left join (select count(0) AS `num`,`course_scores`.`deliver_id` AS `deliver_id` from `course_scores` group by `course_scores`.`deliver_id`) `numbers` on((`course_deliver`.`deliverId` = `numbers`.`deliver_id`))) join `courses` on((`course_deliver`.`course_id` = `courses`.`course_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `staff_identity`
--

/*!50001 DROP VIEW IF EXISTS `staff_identity`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `staff_identity` AS select `identities`.`identity` AS `identity`,`identities`.`college_id` AS `college_id`,`staff`.`account_id` AS `account_id`,`colleges`.`college_name` AS `college_name`,`staff`.`name` AS `name` from ((`identities` join `staff` on((`identities`.`account_id` = `staff`.`account_id`))) left join `colleges` on((`identities`.`college_id` = `colleges`.`college_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `stu_course_simp`
--

/*!50001 DROP VIEW IF EXISTS `stu_course_simp`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `stu_course_simp` AS select `course_scores`.`student_id` AS `student_id`,`course_scores`.`deliver_id` AS `deliver_id`,`courses`.`course_name` AS `course_name`,`courses`.`course_id` AS `course_id`,`course_deliver`.`term_id` AS `term_id` from ((`course_scores` join `course_deliver` on((`course_scores`.`deliver_id` = `course_deliver`.`deliverId`))) join `courses` on((`course_deliver`.`course_id` = `courses`.`course_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `stu_course_table`
--

/*!50001 DROP VIEW IF EXISTS `stu_course_table`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `stu_course_table` AS select `course_scores`.`student_id` AS `student_id`,`course_deliver`.`deliverId` AS `deliverId`,`courses`.`course_id` AS `course_id`,`staff`.`name` AS `name`,`course_deliver`.`start_time` AS `start_time`,`course_deliver`.`end_time` AS `end_time`,`course_deliver`.`start_week` AS `start_week`,`course_deliver`.`end_week` AS `end_week`,`course_deliver`.`term_id` AS `term_id`,`course_deliver`.`course_day` AS `course_day`,`courses`.`course_name` AS `course_name`,`course_deliver`.`location` AS `location` from (((`course_scores` join `course_deliver` on((`course_scores`.`deliver_id` = `course_deliver`.`deliverId`))) join `courses` on((`course_deliver`.`course_id` = `courses`.`course_id`))) join `staff` on((`course_deliver`.`teacher_id` = `staff`.`account_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `student_info`
--

/*!50001 DROP VIEW IF EXISTS `student_info`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `student_info` AS select `students`.`account_id` AS `account_id`,`students`.`student_name` AS `student_name`,`majors`.`major_id` AS `major_id`,`majors`.`major_name` AS `major_name`,`majors`.`college_id` AS `college_id`,`colleges`.`college_name` AS `college_name`,`students`.`phone` AS `phone`,`majors`.`credit_limit` AS `credit_limit`,`students`.`enrollment_time` AS `enrollment_time`,`students`.`gender` AS `gender`,`students`.`email` AS `email` from ((((`account_passwords` join `identities` on(((`account_passwords`.`account_id` = `identities`.`account_id`) and (`identities`.`identity` = 1)))) left join `students` on((`account_passwords`.`account_id` = `students`.`account_id`))) join `majors` on((`identities`.`major_id` = `majors`.`major_id`))) join `colleges` on((`majors`.`college_id` = `colleges`.`college_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `teacher_Info`
--

/*!50001 DROP VIEW IF EXISTS `teacher_Info`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `teacher_Info` AS select `staff`.`account_id` AS `account_id`,`staff`.`name` AS `name`,`staff`.`gender` AS `gender`,`colleges`.`college_name` AS `college_name`,`staff`.`phone` AS `phone`,`staff`.`email` AS `email` from (((`account_passwords` join `identities` on(((`identities`.`account_id` = `account_passwords`.`account_id`) and (`identities`.`identity` = 4)))) join `staff` on((`staff`.`account_id` = `account_passwords`.`account_id`))) join `colleges` on((`colleges`.`college_id` = `identities`.`college_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-03 18:52:59
