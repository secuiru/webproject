package com.db.webapp.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.db.webapp.model.V1na;

import java.util.List;



@Repository
public interface V1narepo extends JpaRepository <V1na, String> {

    @Query(value = "SELECT * FROM v1na", nativeQuery= true)
    List<V1narepo> getv1na();

}