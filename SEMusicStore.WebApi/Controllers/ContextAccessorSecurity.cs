//@CodeCopy
#if ACCOUNT_ON
namespace SEMusicStore.WebApi.Controllers
{
    partial class ContextAccessor
    {
        #region properties
        public string SessionToken
        {
            set
            {
                GetContext().SessionToken = value;
            }
        }
        #endregion properties
    }
}
#endif
