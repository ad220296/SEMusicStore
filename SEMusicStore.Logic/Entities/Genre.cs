using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace SEMusicStore.Logic.Entities
{
    [Table("Genres")]
    [Index(nameof(Name), IsUnique = true)]
    public partial class Genre : EntityObject
    {
        [MaxLength(64)]
        public string Name {get; set; } = string.Empty;
        public List<Artist> Artists { get; set; } = [];
    }
}
