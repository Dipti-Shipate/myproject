package com.project.service;

import java.io.IOException;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.project.repository.FileDBRepository;
import com.project.repository.RequestDao;
import com.project.entity.FileDB;
import com.project.entity.Request;
@Transactional
@Service
public class FileStorageService {

  @Autowired
  FileDBRepository fileDBRepository;
  @Autowired
  RequestDao requestDao;

  public FileDB store(MultipartFile file,int requestid) throws IOException {
    String fileName = StringUtils.cleanPath(file.getOriginalFilename());
    FileDB FileDB = new FileDB(fileName, file.getContentType(), file.getBytes());
 Request requestobj=requestDao.getById(requestid);
    
    if((requestobj.isImageuploadstatus())==false) {
  	  requestobj.setImageuploadstatus(true);
  	  
    }
    requestDao.save(requestobj);
    
   FileDB.setRequest_id(requestDao.getById(requestid));
     
    return fileDBRepository.save(FileDB);
        
  }

  public FileDB getFile(Integer id) {
    //return fileDBRepository.findById(id).get();
	  return fileDBRepository.getImgByReq_id(id);
  }
  
  public Stream<FileDB> getAllFiles() {
    return fileDBRepository.findAll().stream();
  }
}
