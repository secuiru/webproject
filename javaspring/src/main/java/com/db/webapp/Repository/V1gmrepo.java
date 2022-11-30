package com.db.webapp.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.db.webapp.model.V1gm;

import java.util.List;



@Repository
public interface V1gmrepo extends JpaRepository <V1gm, String> {

    @Query(value ="SELECT * FROM v1gm", nativeQuery= true)
    List<V1gmrepo> getv1gm();


}