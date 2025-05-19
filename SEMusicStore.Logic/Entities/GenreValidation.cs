using SEMusicStore.Logic.Contracts;
using SEMusicStore.Logic.Modules.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SEMusicStore.Logic.Entities
{
    partial class Genre : IValidatableEntity
    {
        public void Validate(IContext context, EntityState entityState)
        {
            if (string.IsNullOrWhiteSpace(Name))
            {
                throw new BusinessRuleException("Der Genre-Name darf nicht leer sein.");
            }

            if (Name.Length > 64)
            {
                throw new BusinessRuleException($"Der Genre-Name '{Name}' ist zu lang (max. 64 Zeichen).");
            }
        }
    }
}
