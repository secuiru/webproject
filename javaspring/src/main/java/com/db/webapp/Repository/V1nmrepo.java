package com.db.webapp.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.db.webapp.model.V1nm;

import java.util.List;



@Repository
public interface V1nmrepo extends JpaRepository <V1nm, String> {

    @Query(value = "SELECT * FROM v1nm", nativeQuery= true)
    List<V1nmrepo> getv1nm();

}