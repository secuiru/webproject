package com.db.webapp.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.db.webapp.model.V1ga;

import java.util.List;



@Repository
public interface V1garepo extends JpaRepository <V1ga, String> {

    @Query(value ="SELECT * FROM v1ga", nativeQuery= true)
    List<V1garepo> getv1ga();


}