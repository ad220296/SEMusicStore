using System.ComponentModel.DataAnnotations;

namespace SEMusicStore.ConApp
{
    partial class Program
    {
        static partial void ImportData()
        {
            ImportGenre();
            ImportArtist();
        }
        private static void ImportArtist()
        {
            var executionPath = Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);
            var dataPath = Path.Combine(executionPath!, "data", "artist_dataset.csv");
            var artists = File.ReadAllLines(dataPath)
                .Skip(1)
                .Select(line => line.Split(';'))
                .Select(a => new Logic.Entities.Artist
                {
                    Name = a[0],
                    GenreId = int.Parse(a[1])
                })
                .ToArray();

            using var context = CreateContext();
            int idx = 0;

            foreach (var artist in artists)
            {
                try
                {
                    idx++;
                    context.ArtistSet.Add(artist);
                    context.SaveChanges();
                }
                catch(Exception ex)
                {
                    context.RejectChanges();
                    Console.WriteLine($"Fehler beim Import von Artist {idx} ({artist.Name}): {ex.Message}");
                }
            }
            Console.WriteLine("Fertig mit Artists");
        }

        private static void ImportGenre()
        {
            var executionPath = Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);
            var dataPath = Path.Combine(executionPath!, "data", "genre_dataset.csv");
            var genres = File.ReadAllLines(dataPath)
                .Skip(1)
                .Select(g => new Logic.Entities.Genre
                {
                    Name = g.Trim()
                })
                .ToArray();

            using var context = CreateContext();
            int idx = 0;
            foreach (var genre in genres)
            {
                try
                {
                    idx++;
                    context.GenreSet.Add(genre);
                    context.SaveChanges();
                }

                catch (Exception ex)
                {
                    context.RejectChanges();
                    Console.WriteLine($"Fehler beim Import von Genre {idx} ({genre.Name}): {ex.Message}");
                }
            }
            Console.WriteLine("Fertig mit Genres");
        }
    }
}
