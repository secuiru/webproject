package com.db.webapp.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.db.webapp.model.V1sa;

import java.util.List;



@Repository
public interface V1sarepo extends JpaRepository <V1sa, String> {

    @Query(value = "SELECT * FROM v1sa", nativeQuery= true)
    List<V1sarepo> getv1sa();

}