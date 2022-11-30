package com.db.webapp.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.db.webapp.model.V1sm;

import java.util.List;



@Repository
public interface V1smrepo extends JpaRepository <V1sm, String> {

    @Query(value = "SELECT * FROM v1sm", nativeQuery= true)
    List<V1smrepo> getv1sm();

}