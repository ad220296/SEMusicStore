using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SEMusicStore.Logic.Entities
{
    [Table("Artists")]
    [Index(nameof(Name), IsUnique = true)]
    public partial class Artist : EntityObject
    {
        [MaxLength(64)]
        public string Name { get; set; } = string.Empty;
        public int GenreId { get; set; }
        public Genre? Genre { get; set; }
    }
}
