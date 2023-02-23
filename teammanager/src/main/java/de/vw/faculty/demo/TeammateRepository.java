package de.vw.faculty.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeammateRepository extends JpaRepository<Teammate,Long> {
}
