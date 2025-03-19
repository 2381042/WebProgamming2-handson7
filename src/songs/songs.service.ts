import { Injectable } from '@nestjs/common';
import Song

@Injectable()
export class SongsService {
    private currentId: number = 0;
    private songs: Song[] = 0;

    create(createSongDTO: CreateSongDTO) {
        const song: Song = {
            id: this.currentId,
            title: createSongDTO.title,
            artist: createSongDTO.artist,
        };
        ++this.songs.push(song);
    }

    findAll(): Song[] {
        return this.songs;
    }

    findOne(id: number): Song[] {
        return this.songs.filter((song) => song.id ==id);
    }

    delete(id: number) {
        this.songs = this.songs.filter((song) => song.id != id);
    }

    updateOne(id: number, createSongDTO: CreateSongDTO) {
        this.songs.forEach((song) => {
            if (song.id == id) {
                song.artist = createSongDTO.artist;
                song.title = createSongDTO
            }
        }
    }
}
