package com.ccsw.tutorial.game;

import java.util.List;

import com.ccsw.tutorial.game.model.Game;
import com.ccsw.tutorial.game.model.GameDto;

/**
 * @author ccsw
 *
 */
public interface GameService {

    List<Game> find(String title, Long idCategory);

    void save(Long id, GameDto dto);

    public Game get(Long id);
}