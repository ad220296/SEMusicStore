using SEMusicStore.Logic.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SEMusicStore.Logic.Modules.Exceptions;

namespace SEMusicStore.Logic.Entities
{
    partial class Artist : IValidatableEntity
    {
        public void Validate(IContext context, EntityState entityState)
        {
            if (string.IsNullOrWhiteSpace(Name))
            {
                throw new BusinessRuleException("Der Künstlername darf nicht leer sein.");
            }
            if (!context.GenreSet.AsQuerySet().Any(g => g.Id == GenreId))
            {
                throw new BusinessRuleException($"Kein gültiges Genre mit ID {GenreId} gefunden für Artist '{Name}'.");
            }
        }
    }
}
