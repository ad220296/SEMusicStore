//@CodeCopy
using Avalonia;
using Avalonia.Controls;
using Avalonia.Markup.Xaml;

namespace SEMusicStore.MVVMApp.Views;

public partial class LogonWindow : Window
{
    public LogonWindow()
    {
        InitializeComponent();

        var logonUserControl = this.FindControl<LogonUserControl>("LogonUserControl");

        if (logonUserControl != null && logonUserControl.DataContext is ViewModels.LogonViewModel logonViewModel)
        {
            logonViewModel.CloseAction = () => Close();
        }
    }
}
